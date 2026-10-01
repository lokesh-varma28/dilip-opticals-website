import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Project root directory
const projectRoot = path.resolve(__dirname, '..')
const productsDir = path.resolve(projectRoot, 'src/assets/products')

const MAX_WIDTH = 800
const INITIAL_QUALITY = 80
const MAX_FILE_SIZE_BYTES = 120 * 1024 // 120 KB
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tiff', '.bmp'])

async function optimizeProducts() {
  console.log('---------------------------------------------------------')
  console.log('Opticals Product Image Optimizer')
  console.log(`Target Directory : ${productsDir}`)
  console.log(`Max Width        : ${MAX_WIDTH}px`)
  console.log(`Target Quality   : ${INITIAL_QUALITY}`)
  console.log(`Max File Size    : ${(MAX_FILE_SIZE_BYTES / 1024).toFixed(0)}KB`)
  console.log('---------------------------------------------------------')

  // Ensure directory exists
  if (!fs.existsSync(productsDir)) {
    fs.mkdirSync(productsDir, { recursive: true })
    console.log(`Created directory: ${productsDir}`)
  }

  const entries = await fs.promises.readdir(productsDir, { withFileTypes: true })
  const imageFiles = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => SUPPORTED_EXTENSIONS.has(path.extname(name).toLowerCase()))

  if (imageFiles.length === 0) {
    console.log('No image files found in src/assets/products/.')
    console.log('Add images (e.g. fastrack-aviator.jpg, idee-round.jpg) and rerun this script.')
    return
  }

  console.log(`Found ${imageFiles.length} image file(s) to process...\n`)

  let successCount = 0
  let errorCount = 0

  for (const filename of imageFiles) {
    const inputPath = path.join(productsDir, filename)
    const parsed = path.parse(filename)
    const outputFilename = `${parsed.name}.webp`
    const outputPath = path.join(productsDir, outputFilename)

    // If file is already .webp, check if a source file exists or if it's already compliant
    if (parsed.ext.toLowerCase() === '.webp') {
      const sourceExists = imageFiles.some(
        (f) => f !== filename && path.parse(f).name.toLowerCase() === parsed.name.toLowerCase()
      )
      if (sourceExists) {
        // Will be generated fresh from the primary source image (e.g. .jpg/.png)
        continue
      }

      try {
        const meta = await sharp(inputPath).metadata()
        const stats = await fs.promises.stat(inputPath)
        if ((meta.width || 0) <= MAX_WIDTH && stats.size <= MAX_FILE_SIZE_BYTES) {
          console.log(
            `• ${filename} already optimized (${meta.width}x${meta.height}, ${(stats.size / 1024).toFixed(1)}KB) [Skipped]`
          )
          successCount++
          continue
        }
      } catch {
        // Proceed to optimization if inspection fails
      }
    }

    try {
      // Read entire input into memory buffer to avoid file-locking on Windows
      const inputBuffer = await fs.promises.readFile(inputPath)
      const inputStats = await fs.promises.stat(inputPath)

      let currentQuality = INITIAL_QUALITY
      let outputBuffer = await sharp(inputBuffer)
        .rotate() // Auto-orient based on EXIF
        .resize({
          width: MAX_WIDTH,
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({
          quality: currentQuality,
          effort: 6,
        })
        .toBuffer()

      // If output buffer is larger than 120KB, progressively reduce quality
      while (outputBuffer.length > MAX_FILE_SIZE_BYTES && currentQuality > 20) {
        currentQuality -= 5
        outputBuffer = await sharp(inputBuffer)
          .rotate()
          .resize({
            width: MAX_WIDTH,
            withoutEnlargement: true,
            fit: 'inside',
          })
          .webp({
            quality: currentQuality,
            effort: 6,
          })
          .toBuffer()
      }

      await fs.promises.writeFile(outputPath, outputBuffer)

      const outputMetadata = await sharp(outputBuffer).metadata()
      const originalSizeKB = (inputStats.size / 1024).toFixed(1)
      const finalSizeKB = (outputBuffer.length / 1024).toFixed(1)
      const reduction = (((inputStats.size - outputBuffer.length) / inputStats.size) * 100).toFixed(1)

      const statusTag = outputBuffer.length <= MAX_FILE_SIZE_BYTES ? '[OK <120KB]' : '[WARN >120KB]'

      console.log(
        `✓ ${filename} -> ${outputFilename} ` +
          `(${outputMetadata.width}x${outputMetadata.height}, ${originalSizeKB}KB -> ${finalSizeKB}KB, Q${currentQuality}, ${reduction}% reduction) ${statusTag}`
      )
      successCount++
    } catch (err) {
      console.error(`✗ Error processing ${filename}:`, err.message)
      errorCount++
    }
  }

  console.log('\nOptimization Summary:')
  console.log(`Processed: ${successCount} successful, ${errorCount} errors`)
  console.log('---------------------------------------------------------')
}

optimizeProducts().catch((err) => {
  console.error('Fatal optimizer error:', err)
  process.exit(1)
})

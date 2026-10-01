import storefrontImage from '../assets/dilip-opticals-real-storefront.webp'
import dispensaryImage from '../assets/dilip-opticals-real.webp'

/**
 * Single source of truth for Dilip Optics Grand business details.
 */
export const business = {
  name: "Dilip Optics Grand",
  address:
    "80-31-13, Jawaharlal Nehru Rd, Near Ravindra Bharathi School, Gandhipuram, Rajamahendravaram (Rajahmundry), Andhra Pradesh 533103",
  phone: "+919676955558",
  phoneDisplay: "+91 96769 55558",
  whatsapp: "https://wa.me/919676955558",
  hours: "Daily, 9:30 AM – 9:00 PM",
  googleRating: 4.8,
  reviewCount: 41,
  googleListingUrl:
    "https://www.google.com/maps/search/?api=1&query=Dilip%20Optics%20Grand%20Rajahmundry",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Dilip+Optics+Grand,+80-31-13+Jawaharlal+Nehru+Rd,+Gandhipuram,+Rajamahendravaram&z=16&output=embed",
  // Image paths for easy swapping when new store photos are available (compressed WebP <200KB)
  images: {
    storefront: storefrontImage,
    dispensary: dispensaryImage,
  },
  social: {
    instagram: "https://www.instagram.com/dilip_optics_grand/",
    facebook: null, // Set to valid URL when available to display Facebook icon
  },
  // Unverified marketing claims centralized for easy verification, editing, or removal.
  // All set to null per policy until confirmed by owner.
  claims: {
    // TODO: Owner to confirm customer count claim before promoting
    happyEyes: null,
    // TODO: Owner to confirm in-store frame inventory style count
    inStoreStyles: null,
    // TODO: Owner to confirm free lifetime servicing and adjustments warranty
    lifetimeSupport: null,
    lifetimeAdjustments: null,
    // TODO: Owner to confirm whether 2013 or 1967 is the founding year
    establishedYear: null,
    // TODO: Owner to confirm years in business count
    yearsInBusiness: null,
    // TODO: Owner to confirm 30-min fast fitting guarantee
    fastFitting: null,
    // TODO: Owner to confirm free eye checkup guarantee vs standard consultation
    freeEyeCheckup: null,
  },
  get establishedYear() {
    return this.claims.establishedYear
  },
  get yearsInBusiness() {
    return this.claims.yearsInBusiness
  },
}

export default business

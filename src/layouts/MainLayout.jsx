import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import MobileBottomBar from '../components/MobileBottomBar'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-primary flex flex-col font-body selection:bg-accent/20 selection:text-primary pb-16 md:pb-0">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  )
}

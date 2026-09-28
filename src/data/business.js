import storefrontImage from '../assets/dilip-opticals-real-storefront.jpg'
import dispensaryImage from '../assets/dilip-opticals-real.jpg'

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
  // TODO: confirm opening time with owner
  hours: "Daily, 9:30 AM – 9:00 PM",
  googleRating: 4.8,
  reviewCount: 41,
  googleListingUrl:
    "https://www.google.com/maps/search/?api=1&query=Dilip%20Optics%20Grand%20Rajahmundry",
  // TODO: owner to confirm; change here if the 1967 heritage is confirmed
  establishedYear: 2013,
  mapEmbedUrl:
    "https://www.google.com/maps?q=Dilip+Optics+Grand,+80-31-13+Jawaharlal+Nehru+Rd,+Gandhipuram,+Rajamahendravaram&z=16&output=embed",
  // Image paths for easy swapping when new store photos are available
  images: {
    storefront: storefrontImage,
    dispensary: dispensaryImage,
  },
  social: {
    instagram: "https://www.instagram.com/dilip_optics_grand/",
    facebook: null, // Set to valid URL when available to display Facebook icon
  },
  get yearsInBusiness() {
    return new Date().getFullYear() - this.establishedYear
  },
}

export default business

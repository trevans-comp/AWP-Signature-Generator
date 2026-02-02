
import { Brand, BrandConfig } from './types';

export const BRANDS: Record<Brand, BrandConfig> = {
  [Brand.AT_PROPERTIES]: {
    id: Brand.AT_PROPERTIES,
    logo: 'https://datawarehousephotos.s3.us-east-2.amazonaws.com/luxuryportfolio/broker_logos/76596.jpg',
    primaryColor: '#e31837', // Brand Red
    accentColor: '#000000',
    fontFamily: 'Helvetica, Arial, sans-serif',
    website: 'https://www.atproperties.com',
    socials: {
      facebook: 'https://www.facebook.com/atproperties',
      instagram: 'https://www.instagram.com/atproperties'
    }
  },
  [Brand.CHRISTIES]: {
    id: Brand.CHRISTIES,
    logo: 'https://cdn.brandfetch.io/id5RrRLLN8/w/820/h/273/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1702293295324',
    primaryColor: '#467886', // Christie's Blue
    accentColor: '#666666',
    fontFamily: 'Helvetica, Arial, sans-serif',
    website: 'https://www.christiesrealestate.com',
    socials: {
      facebook: 'https://www.facebook.com/christiesinternationalrealestate',
      instagram: 'https://www.instagram.com/christiesrealestate/',
      linkedin: 'https://www.linkedin.com/company/christies-real-estate/',
      twitter: 'https://twitter.com/ChristiesHomes'
    }
  },
  [Brand.ANSLEY]: {
    id: Brand.ANSLEY,
    logo: 'https://resources.ansleyre.com/images/ta/ansley/20251211161153.ansley.real.estatesignaturegenerator.png',
    primaryColor: '#000000',
    accentColor: '#999999',
    fontFamily: 'Helvetica, Arial, sans-serif',
    website: 'https://www.ansleyre.com/',
    socials: {
      facebook: 'https://www.facebook.com/ansleyrealestate',
      instagram: 'https://www.instagram.com/ansleyrealestate/'
    }
  },
  [Brand.SUBURBAN_JUNGLE]: {
    id: Brand.SUBURBAN_JUNGLE,
    logo: 'https://suburbanjunglegroup.com/wp-content/uploads/2021/04/SJG-logo-1.png',
    primaryColor: '#F6B619', // Yellowish Gold
    accentColor: '#2D5C27', // Forest Green
    fontFamily: 'Helvetica, Arial, sans-serif',
    website: 'https://suburbanjunglegroup.com/',
    socials: {
      facebook: 'https://www.facebook.com/suburbanjungle',
      instagram: 'https://www.instagram.com/suburbanjungle/'
    }
  }
};

export const SOCIAL_ICONS = {
  facebook: 'https://d2y1b8iotpw39u.cloudfront.net/images/cdn-resources/facebook_signature_icon_66c353dc9f2c1.png',
  instagram: 'https://d2y1b8iotpw39u.cloudfront.net/images/cdn-resources/instagram_signature_icon_66c36f6a2b363.png',
  linkedin: 'https://compasssupport.zendesk.com/attachments/token/i9cE41excirtCXkvXQixVI1k2/?name=image005.png',
  twitter: 'https://compasssupport.zendesk.com/attachments/token/o6LTugFXP6AuvqBreqjnnnQGO/?name=image006.png'
};

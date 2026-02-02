
export enum Brand {
  AT_PROPERTIES = '@Properties',
  CHRISTIES = 'Christie\'s International Real Estate',
  ANSLEY = 'Ansley Real Estate',
  SUBURBAN_JUNGLE = 'Suburban Jungle'
}

export interface SignatureData {
  name: string;
  email: string;
  jobTitle: string;
  mobile: string;
  office: string;
  address: string;
  license?: string;
  website?: string;
}

export interface BrandConfig {
  id: Brand;
  logo: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
  website: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

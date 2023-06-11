export class Room {
  id!: number;

  name!: string;

  pricePerHour!: number;

  pictures!: string[];
}

export class SiteLocation {
  id!: number;
  city!: string;
  address!: string;
  timeZone!: string;
}

export class Site {
  id!: number;

  name!: string;

  logo?: string;

  pictures!: string[];

  rules!: string[];

  location!: SiteLocation;

  rooms?: Room[];
}

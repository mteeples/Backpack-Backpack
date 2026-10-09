export interface AreaAreaLink {
  id: number;
  sourceAreaId: number;
  destinationAreaId: number;
  description: string;
}

export const AREA_AREA_LINKS: Array<AreaAreaLink> = [
  {
    id: 0,
    sourceAreaId: 1,
    destinationAreaId: 2,
    description: "Fancy double doors",
  },
  {
    id: 1,
    sourceAreaId: 2,
    destinationAreaId: 3,
    description: "Heavy iron door",
  },
];

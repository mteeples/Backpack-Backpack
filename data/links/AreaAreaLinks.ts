export interface DbAreaAreaLink {
  id: string;
  sourceAreaId: string;
  destinationAreaId: string;
  description: string;
}

export const AREA_AREA_LINKS: Array<DbAreaAreaLink> = [
  {
    id: "0",
    sourceAreaId: "1",
    destinationAreaId: "2",
    description: "Fancy double doors",
  },
  {
    id: "1",
    sourceAreaId: "2",
    destinationAreaId: "3",
    description: "Heavy iron door",
  },
];

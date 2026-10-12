export interface CampaignOverview {
  id: string;
  userIsHost: boolean;
  // Making optional in case linked campaign doesn't exist
  name?: string;
  description?: string;
}

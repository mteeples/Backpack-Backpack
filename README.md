# BackpackBackpack

## Screen Plan

### Login Screen

Renders a login form. Button redirecting to **Signup**. Login flow redirects to **CampaignList**.

### Signup Screen

Renders a signup form. Signup flow redirects to **CampaignList**.

### CampaignList Screen

Conditionally renders one of the following options, depending on the number of campaigns linked to the authenticated user:

-  **No linked campaigns** -> Renders a welcome message with buttons to *host* or *join* a campaign. The *host* button opens a dialog to create a new campaign, prompting for a Title and description. The *join* button opens a modal prompting for the campaign join code. Either modal will link a new campaign to the user and redirect to the appropriate **Campaign** screen.

-  **At least one linked campaign** -> Renders a list of cards representing linked campaigns. The cards indicate whether the user is the host or a player. The cards redirect the user to its associated **Campaign** screen.

### Campaign Detail Screen

Conditionally renders one of the following, depending on the user's role in the campaign (*host* or *player*). Either page shows a list of cards with an *add* button, which opens a modal to add a new item. The host/player distinction is as follows:

- **Host** -> Cards represent *adventures* and link to their associated **Adventure** screen. The modal allows the user to select from a list of pregenerated adventures to link to the campaign and will redirect the user to the appropriaate **Adventure** page on submit.

- **Player** -> Cards represent *characters* and link to their associated **CharacterStats** screen. Characters can be markes active/inactive. The modal will have minimal customization options to create a new character and will redirect to the appropriate **CharacterStats** page on submit.

### Character Stats Screen

Shows the character information and a button linking to the **CharacterInventory** screen. Interacting with the screen should persist updates to the database.

### Character Inventory Screen

Renders a list of cards representing inventory items as well as a component showing the total weight carried as well as a *refresh* button (until I can implement a websocket backend). Note that there is not a button to add a new item, as new items will come from either the host or another player. Each card will have buttons to equip/unequip, remove, or share. The share button opens a modal with the other active characters in the campaign.

### Adventure Screen

Renders the active area with its associated description, items, and monsters. Items open the same modal as described under the **CharacterInventory** screen, allowing the host to share items with the players. Each room will also have links to adjacent areas. The activeRoom will be persisted in the database.

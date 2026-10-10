import { SafeAreaProvider } from "react-native-safe-area-context";
import CampaignListScreen from "./screens/CampaignListScreen/CampaignListScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <CampaignListScreen userId={1} />
    </SafeAreaProvider>
  );
}

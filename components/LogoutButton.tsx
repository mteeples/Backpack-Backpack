import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { COLORS, FONT_SIZES } from "../theme";

interface Props {
  onPress: () => void;
}

const LogoutButton = ({ onPress }: Props) => {
  return (
    <MaterialDesignIcons
      name="logout"
      size={FONT_SIZES.title}
      color={COLORS.ballpointBlack}
      onPress={onPress}
    />
  );
};

export default LogoutButton;

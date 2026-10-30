import { useContext } from "react";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { COLORS, FONT_SIZES } from "../theme";
import { AuthContext } from "../store/AuthContext";

const LogoutButton = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <MaterialDesignIcons
      name="logout"
      size={FONT_SIZES.title}
      color={COLORS.ballpointBlack}
      onPress={signOut}
    />
  );
};

export default LogoutButton;

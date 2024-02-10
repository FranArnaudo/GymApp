import { useTheme } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import I18nText from "./I18nText/I18nText";

type ButtonProps = {
  text: I18nAble,
  onPress: () => void,
  variant?: 'primary' | 'secondary'
  stuck?: 'top' | 'bottom' | 'none',
  Icon?: JSX.Element,
  iconPlacement?: 'pre' | 'post'
}
const Button = ({ text, onPress, Icon, iconPlacement = "pre", variant = 'primary', stuck = 'none', }: ButtonProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const stuckStyles = stuck === 'none' ? undefined : stuck === 'top' ? styles.stuckTop : styles.stuckBottom
  console.log(text.en, stuckStyles)
  return <TouchableHighlight
    style={[
      styles.button,
      stuckStyles,
      variant === 'primary' ? styles.primaryVariantBackground : styles.secondaryVariantBackground,

    ]} onPress={onPress}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
      {Icon && iconPlacement === 'pre' && Icon}
      <I18nText text={text} style={[styles.text, variant === 'primary' ? styles.primaryVariantTextColor : styles.secondaryVariantTextColor]} />
      {Icon && iconPlacement === 'post' && Icon}
    </View>
  </TouchableHighlight>;
};

const useStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      width: '100%',
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 50,
      paddingVertical: 0,
    },
    text: {
      color: theme.palette.primary.main,
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    primaryVariantTextColor: {
      color: theme.palette.primary.main,
    },
    secondaryVariantTextColor: {
      color: theme.palette.tertiary.main,
    },
    primaryVariantBackground: {
      backgroundColor: theme.palette.tertiary.main
    },
    secondaryVariantBackground: {
      backgroundColor: theme.palette.primary.dark
    },
    stuckTop: {
      borderRadius: 0,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8
    },
    stuckBottom: {
      borderRadius: 0,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    }
  });
export default Button;
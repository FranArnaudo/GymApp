import { useTheme } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import I18nText from "./I18nText/I18nText";
import { NeomorphFlex, Shadow, ShadowFlex } from "react-native-neomorph-shadows";

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
  return (<NeomorphFlex
    swapShadows // <- change zIndex of each shadow color
    inner
    style={{
      shadowOffset: { width: 5, height: 5 },
      shadowRadius: 10,
      borderRadius: 50,
      backgroundColor: variant === 'primary' ? theme.palette.tertiary.light : theme.palette.primary.dark,
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignContent: 'center',
    }}
  >
    <TouchableHighlight
      style={[
        styles.button,
        stuckStyles,

      ]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        {Icon && iconPlacement === 'pre' && Icon}
        <I18nText text={text} style={[styles.text, variant === 'primary' ? styles.primaryVariantTextColor : styles.secondaryVariantTextColor]} />
        {Icon && iconPlacement === 'post' && Icon}
      </View>
    </TouchableHighlight>
  </NeomorphFlex>)
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
      color: theme.type === 'dark' ? theme.palette.neutral[900] : theme.palette.neutral.A100,
      fontWeight: '600'
    },
    secondaryVariantTextColor: {
      color: theme.palette.tertiary.main,
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
export default React.memo(Button);
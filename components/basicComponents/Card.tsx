import { useTheme } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";

type CardProps = {
  children: JSX.Element,
  style?: any
}
const Card = ({ children, style = {} }: CardProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  return <View style={[styles.card, style]}>
    <View style={styles.outerView}>
      <View
        style={styles.innerView}>
        {children}
      </View>
    </View>
  </View>;
};

const useStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      width: '100%',
      height: '100%',
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
    innerView: {
      shadowColor: theme.palette.primary.light,
      shadowOffset: { width: -5, height: -5 },
      shadowOpacity: 1,
      shadowRadius: 10,
      width: '100%',
      height: '100%',
      borderRadius: 50,
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    },
    outerView: {
      shadowColor: theme.palette.primary.dark,
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity: 1,
      shadowRadius: 10,
      borderRadius: 50,
      width: '100%',
      height: '100%'
    }
  });
export default Card;
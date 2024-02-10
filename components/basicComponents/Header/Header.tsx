import { useContext } from "react";
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../../../contexts/ThemeContext";
import I18nText from "../I18nText/I18nText";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  title?: I18nAble
}
const Header = ({ title }: HeaderProps) => {
  const { theme } = useContext(ThemeContext)
  const navigation = useNavigation()
  const styles = useStyles(theme)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesignIcon name="left" color={theme.palette.tertiary.main} size={24} />
      </TouchableOpacity>
      <View>
        {title && <I18nText style={styles.title} text={title} />}
      </View>
      <View></View>
    </View>
  );
}

const useStyles = (theme: Theme) => StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 10,
  },
  title: {
    ...theme.typography.h1,

  }
})
export default Header;
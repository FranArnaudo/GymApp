import { ScrollView } from "react-native";
import Button from "../../components/basicComponents/Button";
import { MainStackParamList } from "../../navigators/MainStackNavigator/MainStackNavigator";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { texts } from "../../translations/translations";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { I18nContext } from "../../contexts/I18nContext";
import { darkTheme, lightTheme } from "../../components/theme/theme";
import Background from "../../components/basicComponents/Background";
import { Neomorph, Shadow } from "react-native-neomorph-shadows";

type HomeScreenProps = {
  navigation: NavigationProp<MainStackParamList>
}
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { language, setLanguage } = useContext(I18nContext)
  const newLanguageToSet = language === 'en' ? 'es' : 'en'
  const newThemeToSet = theme.type === 'dark' ? lightTheme : darkTheme
  return (
    <Background>
      <SafeAreaView style={{ width: '100%', flex: 1 }}>

        <ScrollView contentContainerStyle={{ gap: 10, alignItems: 'center' }}>

          <Button text={texts.createFreeWorkout} onPress={() => navigation.navigate('WorkoutNavigator')} />
          <Button text={{ es: 'Cambiar idioma', en: 'Change language' }} onPress={() => setLanguage(newLanguageToSet)} />
          <Button text={{ es: 'Cambiar tema', en: 'Change theme' }} onPress={() => setTheme(newThemeToSet)} />
          {theme.type === 'dark' ? <Neomorph
            // inner // <- enable inner shadow
            // useArt // <- set this prop to use non-native shadow on ios
            style={{
              shadowRadius: 10,
              borderRadius: 20,
              backgroundColor: theme.palette.primary.main,
              width: 100,
              height: 100,
              // ...include most of View/Layout styles
            }}
          /> : <Shadow useArt style={{
            shadowRadius: 10,
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 1,
            shadowColor: theme.palette.neutral[200],
            borderRadius: 20,
            backgroundColor: theme.palette.primary.main,
            width: 100,
            height: 100,
            // ...include most of View/Layout styles
          }} />}
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

export default HomeScreen;
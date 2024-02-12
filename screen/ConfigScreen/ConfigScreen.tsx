import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { I18nContext } from "../../contexts/I18nContext"
import { darkTheme, lightTheme } from "../../components/theme/theme"
import Background from "../../components/basicComponents/Background"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "../../components/basicComponents/Button"
import { ScrollView } from "react-native"

const ConfigScreen = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { language, setLanguage } = useContext(I18nContext)
  const newLanguageToSet = language === 'en' ? 'es' : 'en'
  const newThemeToSet = theme.type === 'dark' ? lightTheme : darkTheme
  return (
    <Background>
      <SafeAreaView style={{ width: '100%', flex: 1 }}>
        <ScrollView contentContainerStyle={{ gap: 10, alignItems: 'center' }}>
          <Button text={{ es: 'Cambiar idioma', en: 'Change language' }} onPress={() => setLanguage(newLanguageToSet)} />
          <Button text={{ es: 'Cambiar tema', en: 'Change theme' }} onPress={() => setTheme(newThemeToSet)} />
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

export default ConfigScreen;
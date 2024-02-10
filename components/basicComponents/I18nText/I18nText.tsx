import { useContext } from "react";
import { Text, TextProps } from "react-native";
import { I18nContext } from "../../../contexts/I18nContext";

type I18nTextProps = TextProps & {
  text: I18nAble,

}
const I18nText = ({ text, ...props }: I18nTextProps) => {
  const { language } = useContext(I18nContext)
  return (
    <Text {...props}>{text[language]}</Text>
  );
}

export default I18nText;
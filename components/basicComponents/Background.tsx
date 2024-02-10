import React, { useContext } from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';

type BackgroundProps = {
  children: JSX.Element
}
const Background = ({ children }: BackgroundProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  return <View style={styles.background}>{children}</View>;
};

const useStyles = (theme: Theme) =>
  StyleSheet.create({
    background: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  });
export default Background;

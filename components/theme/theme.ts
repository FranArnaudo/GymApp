import { StyleProp, TextStyle } from "react-native"



const palette : ThemePalette = {
  primary:{
    main:'#0B2545',
    light: '#13315C',
    dark:'#061426'
  },
  secondary: {
    main:'#4E564F',
    light:'#5e695f',
    dark:'#333834',
  },
  tertiary: {
    main:'#92DCE5',
    light:'#9ff2fc',
    dark:'#279cab',
  },
  success:{
    main:'#00E0AA',
    light:'#00E0AA',
    dark:'#00E0AA'
  },
  neutral:{
    A100: '#FFFFFF', // Pure White
    50: '#F7F7F7',
    100: '#E5E5E5',
    200: '#CCCCCC',
    300: '#B2B2B2',
    400: '#999999',
    500: '#7E7E7E',
    600: '#666666',
    700: '#4C4C4C',
    800: '#333333',
    900: '#000000' // Black
  }
}
const lightModePalette : ThemePalette = {
  primary:{
    main:'#e9f5f7',
    light: '#f5f9fa',
    dark:'#d5f0f5'
  },
  secondary: {
    main:'#4E564F',
    light:'#5e695f',
    dark:'#333834',
  },
  tertiary: {
    main:'#0B2545',
    light: '#13315C',
    dark:'#061426'
  },
  success:{
    main:'#00E0AA',
    light:'#00E0AA',
    dark:'#00E0AA'
  },
  neutral:{
    A100: '#FFFFFF', // Pure White
    50: '#F7F7F7',
    100: '#E5E5E5',
    200: '#CCCCCC',
    300: '#B2B2B2',
    400: '#999999',
    500: '#7F7F7F',
    600: '#666666',
    700: '#4C4C4C',
    800: '#333333',
    900: '#000000' // Black
  }
}


const typography= (palette: ThemePalette): Record<string,StyleProp<TextStyle>> => ({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
    color: palette.tertiary.main
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
    color: palette.tertiary.main
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    color: palette.tertiary.main
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    color: palette.tertiary.main
  },
  h5: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    color: palette.tertiary.main
  },
  h6: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
    color: palette.tertiary.main
  },
  body1: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
    color: palette.tertiary.main
  },
  body2: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 22,
    color: palette.tertiary.main
  },
  body3: {
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 20,
    color: palette.tertiary.main
  }
})
export const darkTheme: Theme = {
  palette: palette,
  typography:  typography(palette),
  type:'dark'
}

export const lightTheme: Theme = {
  palette: lightModePalette,
  typography: typography(lightModePalette),
  type:'light'
}
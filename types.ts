type Theme = {
  palette: ThemePalette
  typography: TypographyTheme
  type:'dark'|'light'
}
type TypographyTheme = {
  h1: any,
  h2: any,
  h3: any,
  h4: any,
  h5: any,
  h6: any,
  body1: any,
  body2: any,
  body3: any
}
type ThemePalette = {
  primary:{
    main: string,
    light: string,
    dark: string
  },
  secondary:{
    main: string,
    light: string,
    dark: string
  },
  tertiary:{
    main: string,
    light: string,
    dark: string
  },
  accent?:{
    main: string,
    light: string,
    dark: string
  },
  success:{
    main: string,
    light: string,
    dark: string
  },
  error?:{
    main: string,
    light: string,
    dark: string
  },
  neutral:{
    A100:string,
    50:string,
    100: string,
    200: string,
    300: string,
    400: string,
    500: string,
    600: string,
    700: string,
    800: string,
    900: string
  },
}

// i18n
type I18nAble = {
  es: string,
  en: string
}

// LOGIC
type Exercise = {
  name: I18nAble,
  musclesWorkedByIntensity: Record<number,string>,
  classification: string
}

type WorkoutExerciseRow = {
  id: string
  exercise: Exercise,
  sets: Sets[]
}
type Sets = {
  id: string,
  selected:boolean;
  last: string,
  reps: number,
  weight: number,
  rir: number
}

type Workout = {
  exercises: WorkoutExerciseRow[]
}
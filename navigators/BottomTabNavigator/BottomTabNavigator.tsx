import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Neomorph, Shadow } from 'react-native-neomorph-shadows';
import IconButtonNeomorph from '../../components/basicComponents/IconButtons/IconButtonNeomorph';
// import WorkoutNavigator from '../WorkoutNavigator/WorkoutNavigator';
import Background from '../../components/basicComponents/Background';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ConfigScreen from '../../screen/ConfigScreen/ConfigScreen';

const Tab = createBottomTabNavigator();

type NeomorphRenderContainerProps = {
  children: JSX.Element
}
const CustomBottomTab = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  console.log("🚀 ~ state:", state)
  const { theme } = useContext(ThemeContext)
  const styles = useStyles(theme)
  const windowWidth = Dimensions.get('window').width
  const Routes: Record<string, JSX.Element> = {
    Home: <FontAwesome5Icon
      name='dumbbell'
      size={28}
      color={theme.type === 'dark' ? theme.palette.neutral.A100 : theme.palette.tertiary.main}
    />,
    Socials: <FeatherIcon
      name='users'
      size={28}
      color={theme.type === 'dark' ? theme.palette.neutral.A100 : theme.palette.tertiary.main}
    />,
    Profile: <FeatherIcon
      name='user'
      size={28}
      color={theme.type === 'dark' ? theme.palette.neutral.A100 : theme.palette.tertiary.main}
    />,
    Stadistics: <AntDesignIcon
      name='linechart'
      size={32}
      color={theme.type === 'dark' ? theme.palette.neutral.A100 : theme.palette.tertiary.main}
    />,
  }

  const NeomorphRenderContainer = ({ children }: NeomorphRenderContainerProps) => (<Neomorph
    swapShadows // <- change zIndex of each shadow color
    style={{
      shadowRadius: 10,
      position: 'absolute',
      bottom: insets.bottom,
      left: 10,
      right: 10,
      borderRadius: 25,
      backgroundColor: theme.palette.primary.main,
      width: windowWidth - 20,
      height: 80,
      alignContent: 'center'
    }}
  >{children}</Neomorph>
  )

  return (
    <NeomorphRenderContainer>
      <View style={styles.buttonsContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <IconButtonNeomorph icon={Routes[label]} size={56} onPress={onPress} isFocused={isFocused} />
          );
        })}

      </View>
    </NeomorphRenderContainer>
  )
}
export function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }} tabBar={(props) => <CustomBottomTab {...props} />}>
      <Tab.Screen name="Profile" component={ConfigScreen} />
      <Tab.Screen name="Stadistics" >{(props) => <Background><></></Background>}</Tab.Screen>
      <Tab.Screen name="Socials" >{(props) => <Background><></></Background>}</Tab.Screen>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const useStyles = (theme: Theme) => StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: theme.palette.primary.main
  },
  buttonsContainer: {
    // backgroundColor: 'red',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '100%'
  },
  bottomView: {
    height: 20
  }
})
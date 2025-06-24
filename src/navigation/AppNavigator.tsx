import { View, Image, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, BookmarksScreen, DetailScreen } from '../screens';
import { BookmarkImg, NewsImg } from '../assets';
import { colors } from '../theme/color';
import { ms } from '../utils';
import { ROUTE_NAMES } from '../constants/routeNames';
import type { RootStackParamList } from './types';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator<RootStackParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ size }) => {
          let iconSource =
            route.name === ROUTE_NAMES.NEWS ? NewsImg : BookmarkImg;

          return (
            <View style={styles.iconContainer}>
              <Image
                source={iconSource}
                style={{ width: size, height: size, resizeMode: 'contain' }}
              />
            </View>
          );
        },
        tabBarLabel: ({ focused, color }) => (
          <View style={styles.labelContainer}>
            <Text style={{ color, fontSize: 12 }}>{route.name}</Text>
            {focused && <View style={styles.labelUnderline} />}
          </View>
        ),
        tabBarActiveTintColor: colors.BLUE_COLOR,
        tabBarInactiveTintColor: colors.GREY_TEXT,
      })}
    >
      <Tab.Screen name={ROUTE_NAMES.NEWS} component={HomeScreen} />
      <Tab.Screen name={ROUTE_NAMES.BOOKMARK} component={BookmarksScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={ROUTE_NAMES.TABS}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={ROUTE_NAMES.DETAIL}
          component={DetailScreen}
          options={{ title: 'News Detail' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelContainer: {
    alignItems: 'center',
  },
  labelUnderline: {
    marginTop: ms(2),
    width: ms(100),
    height: ms(2),
    backgroundColor: colors.BLUE_COLOR,
    borderRadius: ms(1),
  },
});

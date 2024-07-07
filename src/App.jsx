import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screens/beranda/index';
import Promo from './screens/promo/index';
import Riwayat from './screens/riwayat/index';
import Kontak from './screens/kontak/index';
import Splash from './screens/splash/index';
import Login from './screens/Login/index';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#55CB95',
        headerStyle: {
          backgroundColor: '#55CB95',
        },
        headerTintColor: 'white',
      }}>
      <Tabs.Screen
        name="FiqurCell"
        component={Beranda}
        options={{
          tabBarLabel: 'beranda',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Promo"
        component={Promo}
        options={{
          tabBarLabel: 'Promo',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="brightness-percent"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Riwayat"
        component={Riwayat}
        options={{
          tabBarLabel: 'Riwayat',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="clipboard-text"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Akun"
        component={Kontak}
        options={{
          tabBarLabel: 'Kontak',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MenuTab"
        component={MenuTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const style = StyleSheet.create({});

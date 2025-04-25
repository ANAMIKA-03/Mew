import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WatchlistScreen from '../WatchList/WatchListScreen';
import ChartScreen from '../Chart/ChartScreen';
import PositionScreen from '../Position/PositionScreen';
import HistoryScreen from '../History/HistoryScreen';
import SettingsScreen from '../Setting/SettingsScreen';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Watchlist"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2E86C1',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      })}>
      {/* <Tab.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="bookmark" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={ChartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="stats-chart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Position"
        component={PositionScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="briefcase" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings" color={color} size={24} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default MainTabs;

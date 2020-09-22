import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial105823Navigator from '../features/Tutorial105823/navigator';
import NotificationList105795Navigator from '../features/NotificationList105795/navigator';
import Settings105794Navigator from '../features/Settings105794/navigator';
import Settings105786Navigator from '../features/Settings105786/navigator';
import UserProfile105784Navigator from '../features/UserProfile105784/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial105823: { screen: Tutorial105823Navigator },
NotificationList105795: { screen: NotificationList105795Navigator },
Settings105794: { screen: Settings105794Navigator },
Settings105786: { screen: Settings105786Navigator },
UserProfile105784: { screen: UserProfile105784Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

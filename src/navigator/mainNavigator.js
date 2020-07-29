import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList85378Navigator from '../features/NotificationList85378/navigator';
import Settings85377Navigator from '../features/Settings85377/navigator';
import Settings85369Navigator from '../features/Settings85369/navigator';
import UserProfile85367Navigator from '../features/UserProfile85367/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList85378: { screen: NotificationList85378Navigator },
Settings85377: { screen: Settings85377Navigator },
Settings85369: { screen: Settings85369Navigator },
UserProfile85367: { screen: UserProfile85367Navigator },

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

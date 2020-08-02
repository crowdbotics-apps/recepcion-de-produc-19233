import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial86873Navigator from '../features/Tutorial86873/navigator';
import NotificationList86845Navigator from '../features/NotificationList86845/navigator';
import Settings86844Navigator from '../features/Settings86844/navigator';
import Settings86836Navigator from '../features/Settings86836/navigator';
import UserProfile86834Navigator from '../features/UserProfile86834/navigator';
import UserProfile85407Navigator from '../features/UserProfile85407/navigator';
import Tutorial85406Navigator from '../features/Tutorial85406/navigator';
import NotificationList85378Navigator from '../features/NotificationList85378/navigator';
import Settings85377Navigator from '../features/Settings85377/navigator';
import Settings85369Navigator from '../features/Settings85369/navigator';
import UserProfile85367Navigator from '../features/UserProfile85367/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial86873: { screen: Tutorial86873Navigator },
NotificationList86845: { screen: NotificationList86845Navigator },
Settings86844: { screen: Settings86844Navigator },
Settings86836: { screen: Settings86836Navigator },
UserProfile86834: { screen: UserProfile86834Navigator },
UserProfile85407: { screen: UserProfile85407Navigator },
Tutorial85406: { screen: Tutorial85406Navigator },
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

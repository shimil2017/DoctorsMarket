import React from "react";
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions
} from "react-navigation";
import { Icon } from "react-native-elements";
import ENIcon from "react-native-vector-icons/SimpleLineIcons";
import { colors } from "./config";
import LoginScreen from "./screens/auth/LoginScreen";
//import SignupScreen from "./screens/auth/SignupScreen";
import WalkScreen from "./screens/auth/WalkScreen";
import ForgotPassword from "./screens/auth/ForgotPassword";
import InvoicesScreen from "./screens/invoices/InvoicesScreen";
import ChatScreen from "./screens/chat/ChatScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import SheduleScreen from "./screens/shedule/SheduleScreen";
import ChatList from "./screens/chat/ChatList";
import AuthScreen from "./screens/auth/AuthScreen";
import SignupFormone from "./screens/auth/SignupFormone";
import SignupFormtwo from "./screens/auth/SignupFormtwo";
import SignupFormthree from "./screens/auth/SignupFormthree";
import SignupFormfour from "./screens/auth/SignupFormfour";
import EIcon from "react-native-vector-icons/Ionicons";
import { globalStyles } from "./Themes/globalStyle";
import SignupupFormfour from "./screens/auth/SignupFormfour";
import Editprofile from "./screens/profile/Editprofile"
import ChangeProfileImage from "./screens/profile/Changeprofile"
import Changepassword from "./screens/profile/Changepassword"
/*
 headerStyle: config.navigation.tab
      ? globalStyles.header
      : globalStyles.headerWithoutShadow,
    headerTintColor: globalStyleVariables.HEADER_TINT_COLOR,
    headerBackTitle: null,

    */
const AuthStackNavigator = StackNavigator({
  Auth: {
    screen: AuthScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerStyle: globalStyles.headerWithoutShadow,
      headerTintColor: "#37a6ff"
    }
  },
  Signupone: {
    screen: SignupFormone,
    navigationOptions: {
      headerStyle: globalStyles.headerWithoutShadow,
      headerTintColor: "#37a6ff"
    }
  },
  Signuptwo: {
    screen: SignupFormtwo,
    navigationOptions: {
      headerStyle: globalStyles.headerWithoutShadow,
      headerTintColor: "#37a6ff"
    }
  },
  Signupthree: {
    screen: SignupFormthree,
    navigationOptions: {
      headerStyle: globalStyles.headerWithoutShadow,
      headerTintColor: "#37a6ff"
    }
  },
  Signupfour: {
    screen: SignupupFormfour,
    navigationOptions: {
      headerStyle: globalStyles.headerWithoutShadow,
      headerTintColor: "#37a6ff"
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerStyle: globalStyles.headerWithoutShadow,
      headerTintColor: "#37a6ff"
    }
  }
});

const SheduleStackNavigator = StackNavigator(
  {
    Shedule: {
      screen: SheduleScreen,
      navigationOptions: {
        headerTitle: "Shedule"
      }
    }
  },
  {
    headerMode: "screen"
  }
);

const InvoicesStackNavigator = StackNavigator({
  Invoices: {
    screen: InvoicesScreen,
    navigationOptions: {
      headerTitle: "Invoices"
    }
  }
});
const ChatStackNavigator = StackNavigator({
  ChatList: {
    screen: ChatList,
    navigationOptions: {
      headerTitle: "Chat"
    }
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      headerTitle: "Chat",
      gesturesEnabled: false,
      tabBarVisible: false
    }
  }
});
const MyProfileStackNavigator = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null
    }
  },
  Editprofile:{
    screen:Editprofile,
    navigationOptions: {
      headerStyle: globalStyles.headerWithoutShadow,
      headerTintColor: "#37a6ff",
      title:"Edit profile",
      tabBarVisible: false
    }
  },
  Changeprofile:{
    screen:ChangeProfileImage,
    navigationOptions: {
      headerStyle: globalStyles.headerWithoutShadow,
      headerTintColor: "#37a6ff",
      title:"Change profile",
      tabBarVisible: false
    }
  },
  Changepassword:{
    screen:Changepassword,
    navigationOptions: {
      headerStyle: globalStyles.headerWithoutShadow,
      headerTintColor: "#37a6ff",
      title:"Change password",
      tabBarVisible: false
    }
  },
  
});

const MainTabNavigator = TabNavigator(
  {
    Shedule: {
      screen: SheduleStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <ENIcon
            containerStyle={{ justifyContent: "center", alignItems: "center" }}
            color={tintColor}
            name="home"
            size={33}
          />
        )
      }
    },
    Invoices: {
      screen: InvoicesStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: "center", alignItems: "center" }}
            color={tintColor}
            name="mail"
            size={33}
          />
        )
      }
    },
    Chat: {
      screen: ChatStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <EIcon
            containerStyle={{ justifyContent: "center", alignItems: "center" }}
            color={tintColor}
            name="ios-chatbubbles"
            size={33}
          />
        )
      }
    },
    MyProfile: {
      screen: MyProfileStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: "center", alignItems: "center" }}
            color={tintColor}
            name="person"
            size={33}
          />
        )
      }
    }
  },
  {
    lazy: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.primaryDark,
      inactiveTintColor: colors.grey,
      style: {
        backgroundColor: colors.alabaster
      }
    },
    tabBarComponent: ({ jumpToIndex, ...props }) => (
      <TabBarBottom
        {...props}
        jumpToIndex={index => {
          const { dispatch, state } = props.navigation;

          if (state.index === index && state.routes[index].routes.length > 1) {
            const stackRouteName = ["Shedule", "Invoices", "Chat", "MyProfile"][
              index
            ];

            dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: stackRouteName })
                ]
              })
            );
          } else {
            jumpToIndex(index);
          }
        }}
      />
    )
  }
);
/*
export const Locumapp = StackNavigator(
  { 
    
    auth: {
    screen: AuthStackNavigator,
    navigationOptions: {
      header: null
    }
    },
      Main: {
        screen: MainTabNavigator,
        navigationOptions: {
          header: null
        }
      },   
    
  },
  {
    headerMode: "screen",  
    cardStyle: {
      backgroundColor: "transparent"
    }
  }
);
*/



export default (routes = {
  
  auth: {
    screen: AuthStackNavigator,
    navigationOptions: {
      header: null
    }
    },
      Main: {
        screen: MainTabNavigator,
        navigationOptions: {
          header: null
        }
   }      
});

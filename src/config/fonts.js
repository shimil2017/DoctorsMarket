
import {Platform} from "react-native"
export const fonts = {
  fontPrimaryLight:Platform.OS==='ios'?'SFUIDisplay-Light':'SF-UI-Display-Light',
  fontPrimaryBlack:Platform.OS==='ios'?'SFUIDisplay-Light':'SF-UI-Display-Light',
  fontPrimaryItalic:Platform.OS==='ios'?'SFUIDisplay-Black':'SF-UI-Display-Black',
  fontPrimaryBold: Platform.OS==='ios'?'SFUIDisplay-Bold':'SF-UI-Display-Bold',
  fontPrimaryRegular:Platform.OS==='ios'?'SFUIDisplay-Regular':'SF-UI-Display-Regular'
};

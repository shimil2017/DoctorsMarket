import { Alert } from "react-native";
import { Toast } from "native-base";
export const toast = ({text="",position="bottom", type="success", duration=5000})=>{
    Toast.show({text, position, buttonText:"ok", type, duration });
}

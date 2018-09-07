import { Alert } from "react-native";
import { Toast } from "native-base";
const Toastmessage = message => {
    Toast.show({
        text:"ji",
        textStyle: { color: "white" },
        buttonText: "Okay"
      })
};

export default Toastmessage;

import { NativeBaseProvider} from "native-base";
import Login_Signup from "./Screens/Login_SignUp";



export default function App() {  

  const handleInput = (e) => {
    setInput(e);
  };

  return (
    <NativeBaseProvider>
      <Login_Signup/>
    </NativeBaseProvider>
  );
}

import {
  Container,
  Divider,
  Text,
  Center,
  Image,
  VStack,
  ScrollView,
  Stack,
  Input,
  Icon,
  Pressable,
  Button,
  View,
  Link,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Heading } from "native-base";
import { useState } from "react";
import {
  StatusBar,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SignUpScreen from "../Components/SignUp";
import LoginScreen from "../Components/Login";

const Login_Signup = () => {
  const [show, setShow] = useState(false);
  const [isSignUpClicked, setisSignUpClicked] = useState(false);
  const androidStatusBarHeight = StatusBar.currentHeight;
  const toogleSignUp = () => {
    setisSignUpClicked(!isSignUpClicked);
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          marginTop: Platform.OS === "android" ? androidStatusBarHeight : 0,
        }}
      >
        <VStack space={1} alignItems="center">
          <Heading my={3} style={{ textAlign: "center" }}>
            First React-Native App
          </Heading>
          <Divider />
          <Stack direction="column" mb="2.5" mt="1.5" space={3}>
            <Center my={3}>
              <Image
                style={{
                  marginTop: 50,
                  width: 160,
                  height: 160,
                  borderRadius: 80,
                  borderWidth: 1,
                  borderColor: "black",
                  borderStyle: "solid",
                  backgroundColor: "#006990",
                }}
                source={require("../assets/react_native.png")}
                resizeMode="center"
                alt="Alternate Text"
              />
            </Center>
            {isSignUpClicked === false ? <LoginScreen /> : <SignUpScreen />}
            <Center>
              {isSignUpClicked === false ? (
                <Text style={{ marginBottom: 10 }}>
                  Don't have an account?{" "}
                  <TouchableOpacity
                    onPress={() => {
                      toogleSignUp();
                    }}
                  >
                    <Text style={styles.signInLink}>Sign Up</Text>
                  </TouchableOpacity>
                </Text>
              ) : (
                <Text style={{ marginBottom: 10 }}>
                  Already have an account?{" "}
                  <TouchableOpacity
                    onPress={() => {
                      toogleSignUp();
                    }}
                  >
                    <Text style={styles.signInLink}>Login</Text>
                  </TouchableOpacity>
                </Text>
              )}
            </Center>
          </Stack>
        </VStack>
        <Center>
          {" "}
          <Text marginTop={20} fontSize={"xs"}>
            All Right Reserved @DukoDevs 2020-2024
          </Text>
        </Center>
      </ScrollView>
    </>
  );
};
// Styles
const styles = StyleSheet.create({
  signInLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
export default Login_Signup;

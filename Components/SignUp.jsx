// Import necessary components and libraries
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
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
const SignUpScreen = ({ navigation }) => {
  // State variables to store user input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  // Function to handle sign-up button press
  const handleSignUp = () => {
    // Perform sign-up logic here (e.g., API call to register user)

    // For simplicity, just navigate to a dummy "Home" screen
    navigation.navigate("Home");
  };

  return (
    <View>     
      <VStack width={250}>
        <Center>
          <Text>Enter Required Credentials:</Text>
        </Center>
        <Input
          my={2}
          variant="underlined"
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          my={2}
          variant="underlined"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <Input
          my={2}
          variant="underlined"
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Password"
        />

        <Button my={2}>Sign Up</Button>
      </VStack>
    </View>
  );
};


export default SignUpScreen;

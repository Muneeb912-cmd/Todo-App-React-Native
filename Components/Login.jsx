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
const LoginScreen = ({ navigation }) => {
  // State variables to store user input

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSignIn = () => {};

  return (
    <View>
      <View>
        <Center>
          <Text>Enter Login Credentials:</Text>
        </Center>
      </View>
      <VStack width={250}>
        <Input
          variant="underlined"
          placeholder="Email"
          onChange={(text) => {
            setEmail(text);
          }}
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
          onChange={(text) => {
            setPassword(text);
          }}
        />
      </VStack>
      <Button my={2}>Login</Button>
    </View>
  );
};

export default LoginScreen;

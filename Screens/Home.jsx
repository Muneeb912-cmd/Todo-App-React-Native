import React, { useState } from "react";
import { NativeBaseProvider, Text, Box, Button } from "native-base";
import { TextInput } from "react-native";
import TopBar from "../Components/TopBar";

export default function Home() {
  const [isButtonClicked, setisButtonClicked] = useState(false);
  const name = "Muneeb";
  const name2 = "Sana";
  const [Input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e);
  };

  return (
    <NativeBaseProvider>
      <TopBar />
      <Box
        flex={1}
        bg="primary.500"
        alignItems="center"
        justifyContent="center"
      >
        <Text>
          {Input}
          {isButtonClicked === true ? name : name2}
        </Text>
        <TextInput
          style={{ backgroundColor: "white", color: "black" }}
          value={Input}
          onChange={(e) => {
            handleInput(e.nativeEvent.text);
          }}
        />

        <Button
          my={5}
          onPress={() => {
            setisButtonClicked(!isButtonClicked);
          }}
        >
          Toggle Name
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}

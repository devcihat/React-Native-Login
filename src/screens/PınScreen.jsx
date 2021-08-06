import { Fontisto } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NumberPad from "../components/NumberPad";
import TextStyle from "../components/Text";

const PınScreen = ({ navigation }) => {
  const [pinCount, setPinCount] = useState(0);
  const totalPins = 6;

  useEffect(() => {
      if(pinCount === totalPins) {
          navigation.navigate('Tabs')
      }
  },[pinCount])

  const renderPins = () => {
    const pins = [];

    for (let x = 1; x <= totalPins; x++) {
      pins.push(
        x <= pinCount ? (
          <PinContainer key={x}>
            <Pin />
          </PinContainer>
        ) : (
          <PinContainer key={x} />
        )
      );
    }

    return pins;
  };

  const pressKey = (_,index) => {
    setPinCount(prev => {
        return index !=10 ? prev + 1 : prev - 1
    })
  }

  return (
    <Container>
      <TextStyle center heavy title color="#964ff0" margin="32px 0 0 0">
        mybank
      </TextStyle>
      <TextStyle center heavy medium margin="32px 0 0 0">
        Enter Your PIN code.
      </TextStyle>

      <AccessPin>{renderPins()}</AccessPin>

      <TextStyle center bold margin="8px 0 0 0" color="#9c9c9f">
        Forgot PIN?
      </TextStyle>

      <UseTouch onPress={() => navigation.navigate("Touch")}>
        <Fontisto name="locked" color="#964ff0" size={16} />
        <TextStyle bold margin="0 0 0 8px" color="#964ff0">
          Use Touch ID
        </TextStyle>
      </UseTouch>
      <NumberPad onPress={pressKey} />
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default PınScreen;

const Container = styled.SafeAreaView`
background-color:#1e1e1e
flex:1
`;

const AccessPin = styled.View`
    flex-direction:row
    justify-content:space-between
    margin:32px 64px 16px 64px
`;

const UseTouch = styled.TouchableOpacity`
margin:32px 0 64px 0
flex-direction:row
align-items:center
justify-content:center
`;

const PinContainer = styled.View`
width:16px
height:16px
border-radius:8px
border-width:1
border-color:#5196f4
align-items:center
justify-content:center
`;

const Pin = styled.View`
width:8px
height:8px
border-radius:4px
background-color:#5196f4
`;

const StatusBar = styled.StatusBar``;

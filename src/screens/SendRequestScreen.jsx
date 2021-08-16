import React, { useState } from "react";
import styled from "styled-components";

import TextStyle from "../components/Text";
import { MaterialIcons } from "@expo/vector-icons";
import NumberPad from "../components/NumberPad";

const SendRequestScreen = () => {
  const [amount, setAmount] = useState("0");

  const convertToDollars = (currentAmount) => {
    const newAmount = currentAmount / 100;

    return newAmount.toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    });
  };

  const pressKey = (item, index) => {
    setAmount((prev) => {
      return index != 10 ? prev + item : prev.slice(0, prev.length - 1);
    });
  };

  return (
    <Container>
      <TextStyle center large heavy margin="16px 0 0 0">
        Send
      </TextStyle>

      <Amount>
        <TextStyle title heavy>
          {convertToDollars(amount)}
        </TextStyle>
        <TextStyle bold color="#727479">
          Choose amount to send
        </TextStyle>
      </Amount>

      <User>
        <ProfilePhoto source={require("../../assets/icon.png")} />
        <UserDetails>
          <TextStyle medium heavy>
            Design By Cihat
          </TextStyle>
        </UserDetails>
        <MaterialIcons name="edit" size={16} color="#ffffff" />
      </User>

      <Send>
        <TextStyle medium heavy>
          Send {convertToDollars(amount)} to anonim
        </TextStyle>
      </Send>

      <NumberPad onPress={pressKey} />

      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default SendRequestScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Amount = styled.View`
  align-items: center;
`;

const User = styled.View`
margin:20px 16px
flex-direction:row
align-items:center
`;
const ProfilePhoto = styled.Image`
width:48px
height:48px
border-radius:12px
`;

const UserDetails = styled.View`
flex:1
margin:0 16px
`;

const Send = styled.TouchableOpacity`
margin:16px
background-color:#5196f4
padding:16px
align-items:center
border-radius:12px
`;

const StatusBar = styled.StatusBar``;

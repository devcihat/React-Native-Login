import React from "react";
import styled from "styled-components";
import TextStyle from "../components/Text";

const CardsScreen = () => {
  const myCards = [
    {
      id: "1",
      color: "#5750F0",
      number: "1234",
      exp: "10/2020",
      //logo
    },
    {
      id: "2",
      color: "#C84FF1",
      number: "5678",
      exp: "08/2022",
      //logo
    },
    {
      id: "3",
      color: "#5298F7",
      number: "9012",
      exp: "04/2023",
      //logo
    },
    {
      id: "1",
      color: "#974FF2",
      number: "3456",
      exp: "12/2020",
      //logo
    },
  ];

  const renderCard = ({ item }) => (
    <CardContainer>
      <CardInfo>
        <CardLogoContainer>
          <CardLogo />
        </CardLogoContainer>
        <CardDetails>
          <TextStyle>
            &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
            <TextStyle>{item.number}</TextStyle>
          </TextStyle>

          <TextStyle>{item.exp}</TextStyle>
        </CardDetails>
      </CardInfo>
      <CardActions>
        <Remove>
          <TextStyle>Remove</TextStyle>
        </Remove>
        <Update>
          <TextStyle>Update</TextStyle>
        </Update>
      </CardActions>
    </CardContainer>
  );

  return (
    <Container>
      <TextStyle center large heavy margin="16px 0 0 0">
        Cards Screens
      </TextStyle>
      <Cards data={myCards} renderItem={renderCard} />
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default CardsScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Cards = styled.FlatList``;

const CardContainer = styled.View``;

const CardInfo = styled.View``;

const CardLogoContainer = styled.View`
width:64px;
height:64px;
background-color:${(props)=>props.bgColor}; 
`;

const CardLogo = styled.Image``;

const CardDetails = styled.View``;

const CardActions = styled.View``;

const Remove = styled.TouchableOpacity``;

const Update = styled.TouchableOpacity``;

const StatusBar = styled.StatusBar``;

import React from "react";
import styled from "styled-components";
import TextStyle from "../components/Text";

const CardsScreen = (props) => {
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
            <TextStyle heavy medium>{item.number}</TextStyle>
          </TextStyle>

          <TextStyle small heavy color="#727479" margin="4px 0 0 0">{item.exp}</TextStyle>
        </CardDetails>
      </CardInfo>
      <CardActions>
        <Remove>
          <TextStyle heavy color="#727479">Remove</TextStyle>
        </Remove>
        <Update>
          <TextStyle heavy>Update</TextStyle>
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

const Cards = styled.FlatList`
padding:0 8px
margin-top:32px
`;

const CardContainer = styled.View`
background-color:#292929
margin-bottom:16px
padding:16px
border-radius:8px
`;

const CardInfo = styled.View`
flex-direction:row
align-items:center
border-bottom-width:1px
border-bottom-color:#393939
padding-bottom:12px
margin-bottom:12px
`;

const CardLogoContainer = styled.View`
width:64px;
height:64px;
align-items:center
justify-content:center
border-radius:32px
`;

const CardLogo = styled.Image`
width:40px;
height:40px;

`;

const CardDetails = styled.View`
flex:1
align-items:flex-end
`;

const CardActions = styled.View`
flex-direction:row
justify-content:flex-end
align-items:center
`;

const Remove = styled.TouchableOpacity`
margin-right:32px
`;

const Update = styled.TouchableOpacity`
background-color:#3d3d3d
padding:8px 16px
border-radius:6px
`;

const StatusBar = styled.StatusBar``;

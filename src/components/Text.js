import React from "react";
import styled from "styled-components/native";

export default TextStyle = ({ ...props }) => {
  return <Text {...props}>{props.children}</Text>;
};

const Text = styled.Text`
color: ${(props) => props.color ?? "#DBDBDB"};
font-family:'Avenir'
margin: ${(props) => props.margin ?? 0}
padding: ${(props) => props.padding ?? 0}



${({ title, large, medium, small, tiny }) => {
  switch (true) {
    case title:
      return `font-size: 32px;`;
    case large:
      return `font-size: 18px;`;
    case medium:
      return `font-size: 15px;`;
    case small:
      return `font-size: 11px;`;
    case tiny:
      return `font-size: 10px;`;

    default:
      return `font-size:13px;`;
  }
}}

${({ light, bold, heavy, black }) => {
  switch (true) {
    case light:
      return `font-weight: 200;`;
    case bold:
      return `font-weight: 600;`;
    case heavy:
      return `font-weight: 700;`;
    case black:
      return `font-weight: 900;`;

    default:
      return `font-weight:400;`;
  }
}}

${({ center, right }) => {
  switch (true) {
    case center:
      return `text-align: center;`;
    case right:
      return `text-align: center;`;

    default:
      return `text-align:center;`;
  }
}}



`;

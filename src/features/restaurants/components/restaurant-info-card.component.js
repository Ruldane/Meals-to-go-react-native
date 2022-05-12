import React from "react";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[2]};
  align-items: space-between;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

const ClosedTitle = styled(Text)`
  color: ${(props) => props.theme.colors.ui.error};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disney-world/dining/contemporary-resort/chef-mickeys/chef-mickey-characters-close-16x9.jpg?1620233334751",
    ],
    address = "100 random rue here",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  console.log(ratingArray);

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name} </Title>

        <Section>
          <Rating>
            {ratingArray.map((index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </Rating>
          <SectionEnd>
            {isOpenNow ? (
              <SvgXml xml={open} width={20} height={20} />
            ) : isClosedTemporarily ? (
              <ClosedTitle> Closed temporarily</ClosedTitle>
            ) : null}
            <Spacer variant="left.large" />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address} </Address>
      </Info>
    </RestaurantCard>
  );
};

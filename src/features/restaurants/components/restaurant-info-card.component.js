import React from "react";
import { Text, StyleSheet } from "react-native";

import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disney-world/dining/contemporary-resort/chef-mickeys/chef-mickey-characters-close-16x9.jpg?1620233334751",
    ],
    address = "100 random rue here",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name} sqsq</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});

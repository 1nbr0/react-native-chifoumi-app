import React from "react"
import { View, Text } from "react-native"
import { Title } from "./Title"

export const Score = ({ player, score }) => {
  return (
      <Title>{player} : <Text>{score}</Text></Title>
  )
}
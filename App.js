import { Layout } from './src/components/Layout'
import { StyleSheet, View, Button, Text, } from 'react-native';
import { useState } from 'react'
import { Score } from './src/components/Score';
import { Title } from './src/components/Title';

const ROCK = "Pierre"
const SCISSORS = "Ciseaux"
const PAPER = "Feuille"
const DRAW = "Draw"
const PLAYER = "Player"
const COMPUTER = "Computer"
const PLAY = [ROCK, SCISSORS, PAPER]

const getResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return DRAW
  }
  if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice === SCISSORS && computerChoice === PAPER) ||
    (playerChoice === PAPER && computerChoice === ROCK)
  ) {
    return PLAYER
  } else {
    return COMPUTER
  }
}

export default function App() {

  const [playerChoice, setPlayerChoice] = useState("_________");
  const [computerChoice, setComputerChoice] = useState("_________");
  const [resultWinner, setResultWinner] = useState("_________");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  
  const handlePress = (choice) => {
    setPlayerChoice(choice)
    const randomIndex = Math.floor(Math.random() * PLAY.length);
    const randomChoice = PLAY[randomIndex];
    setComputerChoice(randomChoice)
    
    const result = getResult(choice, randomChoice)
    setResultWinner(result)

    countVictory(result)
  }
  
  const countVictory = (result) => {
    if(result === PLAYER) {
      setPlayerScore((previousPlayerScore) => previousPlayerScore + 1)
    } else if (result === COMPUTER) {
      setComputerScore((previousComputerScore) => previousComputerScore + 1)
    }
  }
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.scoreContainer}>
          <Score player={PLAYER} score={playerScore} />
          <Score player={COMPUTER} score={computerScore} />
        </View>
        <View style={styles.result}>
          <Title>{playerChoice}</Title>
          <Text>VS</Text>
          <Title>{computerChoice}</Title>
        </View>
        <View style={styles.winner}>
          <Title>Winner : </Title>
          <Text>{resultWinner}</Text>
        </View>
        <View style={styles.game}>
          <Button title='Pierre' onPress={() => handlePress(ROCK)}/>
          <Button title='Feuille' onPress={() => handlePress(PAPER)}/>
          <Button title='Ciseaux' onPress={() => handlePress(SCISSORS)}/>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "aliceblue",
  },
  scoreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    marginTop: 40,
    padding: 8,
  },
  game: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  result: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100,
  },
  winner: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
import { StyleSheet, Text } from "react-native";

export const Title = ({children}) => {
  return (
    <Text style={styles.titleContainer}>
      {children}
    </Text>
  )
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 6,
    fontSize: 20,
  }
})

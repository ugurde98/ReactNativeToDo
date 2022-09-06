import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "./src/components/Header";

export default function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
    console.log(todoList);
  };
  return (
    <View>
      <Header title='Todo App'/>
      <View style={styles.container}>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Enter ToDo Item"
            onChangeText={(text) => setTodoItem(text)}
            value={todoItem}
          />
        </View>
        <View>
          <Button onPress={addTodoList} title="Add Item" />
        </View>
        <View>
          <Text>List of Todo's</Text>
        </View>
        <ScrollView>
          {todoList.map((todo) => (
            <View key={todo} style={styles.todoItem}>
              <Text>{todo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
  textInput: {
    padding: 10,
    borderColor: "black",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  todoItem: {
    marginTop: 10,
    padding: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
});

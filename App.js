import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clearItems = () => {
    setData([]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)} value={text}
      />
      <Button title="Add" onPress={addItem} />
      <Button title="Clear" onPress={clearItems} />
      <Text>Shopping list</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
        <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 200,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  }
});


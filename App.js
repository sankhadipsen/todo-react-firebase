import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //When the app loads, it will listen for changes in the database and fetches new todos as they are added or removed.

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    //this function adds values to the todo list
    event.preventDefault(); //important to stop the refresh
    // setTodos([...todos, input]);

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');//clear the input
  }
  return (
    <div className="App">
      <h1>Daily To Do</h1>
      <form>
        <FormControl>
          <InputLabel class="input">Enter Your todo</InputLabel>
          <Input class="value" value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add</Button>
      </form>      

      <ul>
        {todos.map(todo =>(
          <Todo todo={todo}/>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
import './App.css';
import Header from "./Components/Header"
import TodoList from "./Components/TodoList"
import React  from 'react';

function App() {
  return (
    <div className="App">
     <Header/>
     <TodoList/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';

const List = [
  {
    item: 'todo1',
    done: false,
    id: 456456456,
  },
  {
    item: 'todo2',
    done: true,
    id: 54450554,
  }
];

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Redux Todo</h1>
      <div className="app__container">
      <div className="app__todoContainer">
      {
        List.map(item => (
          <TodoList name={item.item} done={item.done} id={item.id} />
          ))
        }
          </div>
          <Input />
        </div>
    </div>
  );
}

export default App;

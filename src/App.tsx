import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="App para gestion de tareas" />
      <TodoList />
    </div>
  );
};

export default App;
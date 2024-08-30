import React, { useState } from 'react';
import styles from './AddTodo.module.css';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue(''); // Clear input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTodoForm}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={styles.input}
        placeholder="Ingrese una tarea a realizar"
      />
      <button type="submit" className={styles.addButton}>Agregar nueva tarea</button>
    </form>
  );
};

export default AddTodo;
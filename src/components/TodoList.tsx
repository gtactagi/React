import React, { useState } from 'react'; // Importa React y el hook useState para gestionar el estado en el componente
import TodoItem from './TodoItem'; // Importa el componente TodoItem para mostrar cada tarea de la lista
import AddTodo from './AddTodo'; // Importa el componente AddTodo para añadir nuevas tareas
import styles from './TodoList.module.css'; // Importa el módulo CSS para estilizar el componente

// Define una interfaz TypeScript para el tipo de tarea
interface Todo {
  id: number; 
  text: string; 
  completed: boolean; 
}

// Define el componente funcional TodoList
const TodoList: React.FC = () => {
  // Estado para almacenar la lista de tareas
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Aprender TypeScript', completed: false },
    { id: 2, text: 'Crear un proyecto React', completed: true },
  ]);

  // Estado para gestionar el filtro de tareas
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  // Función para añadir una nueva tarea
  const addTodo = (text: string) => {
    // Crea una nueva tarea con un identificador único
    const newTodo: Todo = {
      id: todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1,
      text,
      completed: false,
    };
    // Actualiza el estado con la nueva tarea añadida
    setTodos([...todos, newTodo]);
  };

  // Función para alternar el estado completo de una tarea
  const toggleTodo = (id: number) => {
    // Actualiza la tarea especificada con el nuevo estado de completado
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Función para eliminar una tarea por su identificador
  const removeTodo = (id: number) => {
    // Filtra la lista de tareas para excluir la tarea con el identificador especificado
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filtra las tareas según el filtro seleccionado
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed; 
    if (filter === 'incomplete') return !todo.completed; 
    return true; // Muestra todas las tareas (filtro 'all')
  });

  return (
    // Contenedor principal del componente
    <div className={styles.todoList}>
      {/* Componente para añadir nuevas tareas */}
      <AddTodo onAdd={addTodo} />
      
      {/* Contenedor para los botones de filtro */}
      <div className={styles.filters}>
        {/* Botón para mostrar todas las tareas */}
        <button onClick={() => setFilter('all')}>Ver todas</button>
        {/* Botón para mostrar solo las tareas completadas */}
        <button onClick={() => setFilter('completed')}>Ver tareas completas</button>
        {/* Botón para mostrar solo las tareas no completadas */}
        <button onClick={() => setFilter('incomplete')}>Ver tareas incompletas</button>
      </div>
      
      {/* Mensaje cuando no hay tareas disponibles */}
      {filteredTodos.length === 0 ? (
        <p className={styles.emptyMessage}>No hay tareas pendientes</p>
      ) : (
        // Muestra la lista de tareas filtradas
        filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => toggleTodo(todo.id)}
            onRemove={() => removeTodo(todo.id)}
          />
        ))
      )}
    </div>
  );
};

export default TodoList; // Exporta el componente para que pueda ser utilizado en otros archivos
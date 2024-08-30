import React from 'react'; 
import styles from './TodoItem.module.css'; // Importa el archivo CSS módulo para los estilos específicos de este componente

// Define una interfaz TypeScript para las propiedades que recibirá el componente TodoItem
interface TodoItemProps {
  text: string; 
  completed: boolean; 
  onToggle: () => void; // Función a ejecutar cuando se cambie el estado del checkbox
  onRemove: () => void; // Función a ejecutar cuando se elimine la tarea
}

// Define el componente funcional TodoItem que recibe props según la interfaz TodoItemProps
const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onToggle, onRemove }) => {
  return (
    // El contenedor principal del componente
    <div className={styles.todoItem}>
      {/* Checkbox para marcar la tarea como completa o no */}
      <input
        type="checkbox" 
        checked={completed} 
        onChange={onToggle} // Cuando el checkbox cambia, se llama a la función onToggle
        className={styles.checkbox} 
      />
      {/* Texto de la tarea, con una clase condicional que aplica un estilo cuando la tarea está completada */}
      <span className={`${styles.text} ${completed ? styles.completed : ''}`}>
        {text} {/* Muestra el texto de la tarea */}
      </span>
      {/* Botón para eliminar la tarea */}
      <button onClick={onRemove} className={styles.removeButton}>
        Eliminar tarea {/* Texto del botón */}
      </button>
    </div>
  );
};

export default TodoItem; // Exporta el componente para que pueda ser utilizado en otros archivos

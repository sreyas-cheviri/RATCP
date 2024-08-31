import React, { useState } from "react";

export default function TodoCards(props) {
  const { children, handleDeleteTodo, index, handleeditTodo } = props;
  const [isCompleted, setIsCompleted] = useState(false); // Define state for completed status

  const handleCompleteTodo = () => {
    setIsCompleted(!isCompleted); // Toggle the completed state
  };

  return (
    <li className="todoItem">
      <p style={{ 
        textDecoration: isCompleted ? 'line-through' : 'none',
        color: isCompleted ? 'gray' : 'black'
      }}>
        {children} {/* Ensure children are rendered inside the paragraph */}
      </p>
      <div className="actionsContainer"> {/* Fixed typo in class name */}
        <button onClick={() => handleeditTodo(index)}>
          <i className="fa-solid fa-pen"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-circle-minus"></i>
        </button>
        <button onClick={handleCompleteTodo}>
          <i className="fa-solid fa-check"></i>
        </button>
      </div>
    </li>
  );
}

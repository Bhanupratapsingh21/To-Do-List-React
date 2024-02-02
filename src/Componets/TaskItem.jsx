import React from "react";

function TaskItem({ task , onDelete }) {

  const handleDeleteClick = ()=>{
    onDelete(task);
  }

  return (
    <div class="info">
      <div class="info__title"><h1 style={{textAlign:"center" , fontSize :"25px"}} >{task}</h1></div>
      <hr/>
      <button onClick={handleDeleteClick} class="btn">
          <span class="text">Delete Task</span>
      </button>
    </div>
  );
}

export default TaskItem;

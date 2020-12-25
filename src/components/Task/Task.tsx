import * as React from 'react';
import { Card, Button } from '@blueprintjs/core';
import { task } from '../../interfaces/task';
import './Task.scss';

 
const Task: React.SFC<task> = ( { name, description, initDate, finishDate }: task ) => {
  return ( 
    <Card
      className = "task"
      interactive={true}
      elevation = {3}
    >
      <h3> { name } </h3>
      <p>{description} </p>
      <p> date : {initDate ? initDate.toLocaleDateString() : "?????"} - {finishDate ? finishDate.toLocaleDateString() : "?????"} </p>
      <div className = "task__buttons">
        <Button
          className = "task__buttons__button"
         text="Terminada"
          type = "button" 
        />
        <Button
          className = "task__buttons__button"
         text="Pendiente"
          type = "button" 
        />
        <Button
          className = "task__buttons__button"
         text="Eliminar"
          type = "button" 
        />
      </div>
    </Card>
   );
}
 
export default Task;
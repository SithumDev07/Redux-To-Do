import React from 'react';
import './todoList.css';

import Checkbox from '@material-ui/core/Checkbox';

const TodoList = ({name, done, id}) => {

    const handleCheck = () => {
      
    }

    return (
        <div className="todoItem">
            <Checkbox 
                checked={done}
                color="secondary"
                onChange={handleCheck}
                inputProps={{'aria-label':'secondary checkbox'}}
            />
           <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    )
}

export default TodoList;

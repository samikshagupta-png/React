import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice'
function Todos(){
    const todos= useSelector(state =>state.todos)
    const dispatch = useDispatch()
    return(
        <>
        <div>Todos</div>
        {todos.map((todos) =>(
            <li key={todos.id}>
                {todos.text}
                <button onClick={()=>dispatch(removeTodo(todos.id))}>

                </button>
            </li>
        ))}
        </>
    )
}
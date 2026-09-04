import {createSlice,nanoid} from '@reduxjs/toolkit'
const initialState = {
    todos: [{id:1,text :"Hello world"}]
}
export const tododSlice = createSlice({
    name :'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id :nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo :(state,action)=>{
            state.todos = state.todos.filter(() => todo.id!=action.payload)

        },

    }
})
export const {addTodo,removeTodo} = tododSlice.actions
export default tododSlice.reducer
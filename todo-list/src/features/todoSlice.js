import { createSlice } from '@reduxjs/toolkit'

// this todoList is same as useState initial value that is useState([])
const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => { // this state is same as state in const [state, setState]
            state.todoList.push(action.payload) // this is same as setState
        },

        setCheck: (state, action) => {
            state.todoList.map( item => {
                if(action.payload === item.id){
                    if(item.done === true){
                        item.done = false;
                    }
                    else{
                        item.done = true;
                    }
                }
            })
        } 
    }
});

export const { saveTodo, setCheck } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer
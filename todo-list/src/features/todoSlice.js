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
        }
    }
});

export const {
    saveTodo
} = todoSlice.actions
export default todoSlice.reducer
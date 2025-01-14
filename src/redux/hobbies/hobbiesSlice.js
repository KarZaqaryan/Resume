import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id:1,
            hobby: 'Playing Video Games'
        }
    ]
}

const hobbySlice = createSlice({
    name: "hobbies",
    initialState,

    reducers: {
        addHobby: (state, action) => {
            return {
                ...state,
                value: [...state.value, {
                    id: Date.now(),
                    hobby: action.payload
                }]
            }
        },
        removeHobby: (state, action) => {
            return {
                ...state,
                value: state.value.filter((exp) => exp.id !== action.payload)
            }
        }
    }
})

export const {addHobby, removeHobby} = hobbySlice.actions;

export default hobbySlice.reducer;
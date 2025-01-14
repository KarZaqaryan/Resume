import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id:1,
            lang: 'English',
            level: 2
        }
    ]
}

const languageSlice = createSlice({
    name: "languages",
    initialState,

    reducers: {
        addLanguage: (state, action) => {
            return {
                ...state,
                value: [...state.value, {
                    id: Date.now(),
                    lang: action.payload.lang,
                    level: action.payload.level,
                }]
            }
        },
        removeLanguage: (state, action) => {
            return {
                ...state,
                value: state.value.filter((res) => res.id !== action.payload)
            }
        }
    }
})

export const {addLanguage, removeLanguage} = languageSlice.actions;

export default languageSlice.reducer;
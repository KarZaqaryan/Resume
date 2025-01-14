import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id: 1,
            education: "Hrant Dink N44 School",
        },
    ],
};

const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        addEducation: (state, action) => {
            state.value.push({
                id: Date.now(),
                education: action.payload,
            });
        },
        removeEducation: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addEducation, removeEducation } = educationSlice.actions;
export default educationSlice.reducer;

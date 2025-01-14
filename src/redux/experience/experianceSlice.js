import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id: 1,
            company: "DaniSoft",
            work: "React Developer",
        },
    ],
};

const experienceSlice = createSlice({
    name: "experiences",
    initialState,
    reducers: {
        addExperience: (state, action) => {
            const { company, work } = action.payload;
            state.value.push({
                id: Date.now(),
                company,
                work,
            });
        },
        removeExperience: (state, action) => {
            state.value = state.value.filter((exp) => exp.id !== action.payload);
        },
    },
});

export const { addExperience, removeExperience } = experienceSlice.actions;
export default experienceSlice.reducer;

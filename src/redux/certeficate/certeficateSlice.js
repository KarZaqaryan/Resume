import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id:1,
            txt: 'DaniSoft Academy'
        }
    ],
};

const certificateSlice = createSlice({
    name: "certificates",
    initialState,
    reducers: {
        addCertificate: (state, action) => {
            return {
                ...state,
                value: [...state.value, {
                    id: Date.now(),
                    txt:action.payload
                }],
            }
        },
        removeCertificate: (state, action) => {
            state.value = state.value.filter((cert) => cert.id !== action.payload);
        },
    },
});

export const { addCertificate, removeCertificate } = certificateSlice.actions;
export default certificateSlice.reducer;

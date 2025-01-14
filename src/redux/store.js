import { configureStore } from "@reduxjs/toolkit";
import certificateReducer from "./certeficate/certeficateSlice";
import educationSlice from "./education/educationSlice";
import experianceSlice from "./experience/experianceSlice";
import hobbiesSlice from "./hobbies/hobbiesSlice";
import languagesSlice from "./languages/languagesSlice";

export const store = configureStore({
    reducer: {
        certificates: certificateReducer,
        education: educationSlice,
        exp: experianceSlice,
        hobby: hobbiesSlice,
        lang: languagesSlice
    },
});

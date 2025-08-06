import { configureStore } from "@reduxjs/toolkit";
import todoSilce from "../feature/todoSlice"

const store = configureStore({
    reducer : {
        todos : todoSilce
    }
})

export default store
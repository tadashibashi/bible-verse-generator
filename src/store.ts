import { configureStore } from "@reduxjs/toolkit";
import { colorReducer, ColorState, defaultColorState } from "./ColorSlice";
import { verseReducer, defaultVerseState, VerseState } from "./VerseSlice"

export interface StoreState {
    verse: VerseState;
    color: ColorState;
}

export const store = configureStore({
    reducer: { 
        verse: verseReducer,
        color: colorReducer
    },
    preloadedState: {
        verse: defaultVerseState,
        color: defaultColorState
    }
});

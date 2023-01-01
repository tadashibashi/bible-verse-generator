import { getRandomVerse } from "./verses";

export interface VerseState {
    text: string;
    ref: string;
    version: string;
    type: string;
    lastState: VerseState;
}

enum VerseActionType {
    SetVerse = "VerseActionType.SetVerse"
}

export interface VerseAction {
    type: VerseActionType;
    data: { text: string, ref: string, type: string, version: string};
}

export const defaultVerseState = (function() {
    return {
        text: "",
        ref: "",
        type: "",
        version: "",
        lastState: {
            text: "",
            ref: "",
            type: "",
            version: "",
            lastState: null
        },
    } as VerseState;
})();

export function verseReducer(state: VerseState = defaultVerseState, action: VerseAction) {

    switch(action.type) {
        case VerseActionType.SetVerse:
            return {
                text: action.data.text,
                ref: action.data.ref,
                type: action.data.type,
                version: action.data.version,
                lastState: state
            };
        
        default:
            return state;
    }
}

export const verseActions = {
    setRandVerse() {
        return {
            type: VerseActionType.SetVerse,
            data: getRandomVerse()
        }
    }
}

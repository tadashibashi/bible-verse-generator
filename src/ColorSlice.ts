import { Color, ColorMake, copyColor, genRandColor, makeColor } from "./Color";

export interface ColorState {
    target: Color;
    current: Color;
    lerpAmt: number;
}

export const defaultColorState = (function() {
    const target = makeColor(ColorMake.White);
    const current = copyColor(target);

    return {
        target,
        current,
        lerpAmt: .2,
    } as ColorState;
})();

export enum ColorActionType {
    SetColor = "ColorActionType.SetColor",
    SetTargetColor = "ColorActionType.SetTargetColor"
}

interface ColorAction {
    type: ColorActionType;
    color?: Color; 
}

export const colorActions = {
    setColor(color: Color) {
        return {
            type: ColorActionType.SetColor,
            color: copyColor(color)
        }
    },
    setTargetColor(color: Color) {
        return {
            type: ColorActionType.SetTargetColor,
            color: copyColor(color)
        }
    }
}

export function colorReducer(state: ColorState = defaultColorState, action: ColorAction) {
    switch(action.type) {
        case ColorActionType.SetColor: {
            return {
                target: copyColor(state.target),
                current: action.color as Color,
                lerpAmt: state.lerpAmt
            }
        }
        case ColorActionType.SetTargetColor: {
            return {
                target: action.color as Color,
                current: copyColor(state.current),
                lerpAmt: state.lerpAmt
            }
        }
        default:
            return state;
    }
}

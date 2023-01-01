import { lerp } from "./util";

export interface Color {
    r: number,
    g: number,
    b: number
}

export function lerpColor(color: Color, target: Color, amount: number): Color {
    return {
        r: lerp(color.r, target.r, amount),
        g: lerp(color.g, target.g, amount),
        b: lerp(color.b, target.b, amount)
    };
}

export function numberToPaddedHex(n: number, width: number): string {
    let ret = n.toString(16);
    
    while(ret.length < width) {
        ret = '0' + ret;
    }

    return ret;
}

export function colorToString(color: Color): string {
    let ret = "#";
    ret += numberToPaddedHex(color.r, 2);
    ret += numberToPaddedHex(color.g, 2);
    ret += numberToPaddedHex(color.b, 2);

    return ret;
}

export function copyColor(color: Color): Color {
    return {
        r: color.r,
        g: color.g,
        b: color.b
    };
}

export function roundColor(color: Color): Color {
    return {
        r: Math.round(color.r),
        g: Math.round(color.g),
        b: Math.round(color.b)
    };
}

export enum ColorMake {
    White,
    Black,
    Red,
    Green,
    Blue
}

export function makeColor(make: ColorMake) {
    switch(make) {
        case ColorMake.White:
            return {
                r: 255,
                g: 255,
                b: 255
            };
        case ColorMake.Black:
            return {
                r: 0,
                g: 0,
                b: 0
            };
        case ColorMake.Red:
            return {
                r: 255,
                g: 0,
                b: 0
            };
        case ColorMake.Green:
            return {
                r: 0,
                g: 255,
                b: 0
            };
        case ColorMake.Blue:
            return {
                r: 0,
                g: 0,
                b: 255
            };
        default: {
            return makeColor(ColorMake.White);
        }
    }
}

/**
 * Rounds color values and compares
 */
export function colorsEqual(a: Color, b: Color): boolean {
    a = roundColor(a);
    b = roundColor(b);

    return a.r === b.r && a.g === b.g && a.b === b.b;
}

export function genRandColor(): Color {
    return {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    }
}

export function genRandNonLightColor(): Color {
    let color = {
        r: 0, g: 0, b: 0
    };
    do {
        color = genRandColor();
    } while (color.r > 200 && color.g > 200 && color.b > 200);

    return color;
}

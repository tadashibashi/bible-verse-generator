import { genRandColorStr } from "../src/util"

function isHexChar(c: string) {
    return /^[a-f0-9]$/i.test(c);
}

function isValidColor(color: string) {
    if (color.length === 0) return false;
    
    if (color[0] !== '#') return false;

    color = color.substring(1);

    if (color.length !== 1 && color.length !== 3 && color.length !== 6 && color.length !== 8)
        return false;
    
    for (let i = 0; i < color.length; ++i) {
        if (!isHexChar(color[i]))
            return false;
    }

    return true;
}

describe("genRandColorStr", () => {
    test("generates valid color string x100000", () => {
        for (let i = 0; i < 100000; ++i) {
            expect(isValidColor(genRandColorStr())).toBe(true);
        }
    })

});
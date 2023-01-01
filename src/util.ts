const genRandHexChar: () => string = (function() {
    const hexChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    return function() { 
        return hexChars[Math.floor(Math.random() * hexChars.length)]
    };
})();


export function genRandColorStr() {
    let colorStr = "#";
    for (let i = 0; i < 6; ++i) {
        colorStr += genRandHexChar();
    }

    return colorStr;
}

export function lerp(n: number, target: number, amount: number) {
    return (target - n) * amount + n;
}
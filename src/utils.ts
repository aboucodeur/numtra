import { convertNumToWordFn, splitNumFn } from "./type"
import { centaine, absolute, numStr, unites } from "./convertion"

const splitNum: splitNumFn = (num) => {
    const absVal = absolute(num)
    const strVal = numStr(absVal)
    const len = strVal.length
    const out: string[] = []
    for (let i = 0; i < len; i += 3) {
        const pos = (len - 1) - i
        const piece: string = `${strVal[pos - 2] || ''}${strVal[pos - 1] || ''}${strVal[pos] || ''}`
        out.push(piece)
    }
    return out.reverse()
}
const convertNumToWord: convertNumToWordFn = (numTab) => {
    if (!numTab) return ''
    const tab = numTab
    const lot = numTab.length
    console.log(lot)
    let res = '';
    let dep = 2
    switch (lot) {
        case 1:
            const conv = centaine(tab[0], "")
            res = conv
            break;
        case 2:
            for (let i = 0; i < lot; i++) {
                dep++
                const conv = centaine(tab[i], unites[dep])
                res += `${conv} `
            }
            break;
        case 3:
            dep = 1;
            for (let i = 0; i < lot; i++) {
                dep++
                const conv = centaine(tab[i], unites[dep])
                res += `${conv} `
            }
            break;
        case 4:
            dep = 0
            for (let i = 0; i < lot; i++) {
                dep++
                const conv = centaine(tab[i], unites[dep])
                res += `${conv} `
            }
            break;
        case 5:
            dep = -1
            for (let i = 0; i < lot; i++) {
                dep++
                const conv = centaine(tab[i], unites[dep])
                res += `${conv} `
            }
            break;
        default:
            throw new Error("trillons depasser")
            break;
    }
    return res
}

export { splitNum, convertNumToWord }
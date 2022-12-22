import { convertNumToWord, splitNum } from "./utils"
import { capitalize } from "./convertion"
import { formatWordFn } from "./type"

const formatWord: formatWordFn = (num) => {
    if (!num) return null
    const sNum = splitNum(num)
    const word = convertNumToWord(sNum)
    const splitAndJoinAndTrim = word.split('-').join(' ').trim()
    const finalWord = splitAndJoinAndTrim
    return capitalize(finalWord)
}
export { formatWord }
// ** types
type defaultParam = number | string
export type unity = "trillons" | "milliards" | "millions" | "milles" | "cents" | ""

export type baseType = {
    [key: number]: string
}

export type capitalizeFn = (word: string) => string
export type absoluteFn = (num: defaultParam) => number
export type numStrFn = (num: defaultParam) => string

export type uniteFn = (num: defaultParam) => string
export type dizaineFn = (num: defaultParam) => string
export type centaineFn = (num: defaultParam, letter: unity) => string
export type splitNumFn = (num: defaultParam) => Array<string>
export type convertNumToWordFn = (numTab: string[]) => string
export type formatWordFn = (num: defaultParam) => string | null
type Length<T extends readonly any[]> = T["length"];
// function getLength(arr) {
//     if (!Array.isArray(arr)) return;
//     return arr.length
// }

//知识点
// 什么是tuple类型
// tuple 和普通的数组有什么区别
type StringNumberPair = [string, number];
type stringArr = string[]
type t3 = stringArr["length"]
type t4 = StringNumberPair['length']

//as const
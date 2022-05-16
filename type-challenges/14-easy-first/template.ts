type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T['length'] extends 0 ? never: T[0]


// type First <T extends any[]> =T [0]extends T[number] ?T[0]:never

// type First<T extends any[]> = T['length'] extends 0 ? never: T[0]

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// type First<T extends any[]> = T extends [infer First, ...unknown[]] ? First : never


type ages = [1,2,3]
type t1 = ages[number]
type t2 =1 extends ages[number] ?'true':'false'

//T===[]
//js

// 1.extends 类型条件判断
// 2.获取tuple的length的属性 indexed
// 3.extends union 判断的规则
// 4.infer 的使用 (推断)

// const first = (arr) => {
//     // arr 是不是一个空数组 如果是的话 那么返回never
//     if (arr.length === 0) return 'never';
//     // return arr[0]

//     const [first, ...rest] = arr
//     return first ?first:"never"
// }
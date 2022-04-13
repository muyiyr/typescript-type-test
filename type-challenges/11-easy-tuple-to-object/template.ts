type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    // [P in keyof T]: P
    [P in  T[number]]: P
}
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// keyof array ->索引
type r = TupleToObject<typeof tuple>
// typeof 非类型的世界 => 类型的世界


//js
// function tupleToObject(array) {
//   1.array 里面的key是不是string类型，或者是不是number 或者是不是symbol 如果不是的话报错
//     const obj = {}
//     array.foreach((val) => {
//         obj[val] = val;
//     })
//     return obj;
// }
// 返回一个对象
// 遍历array T[number]
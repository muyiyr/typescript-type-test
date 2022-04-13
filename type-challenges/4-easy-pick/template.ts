// 联合类型union

//title
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}
//js
//对比学习法
// function myPick(todo, keys) {
//     const obj = {}
//     keys.foreach(key => {
//         if (key in todo) {
//             obj[key] = todo[key];
//         }
//     })
//     return obj;
// }
// *1.返回一个对象 {}
// *2.遍历foreach    mapped       https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// *3.todo[key]取值  取值 indexed  https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// *4.看看key在不在todo里面  keyof lookup   https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types

//约束
//https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
type MyReadonly<T> = {
    readonly[P in keyof T]: T[P]
}

interface TOdo {
    a: string;
    b: string;
}

interface User {
    readonly name: string;
}
// type r = keyof TOdo;
// const rv: r =''

const xiaohong: User = {
    name: 'xiaohong',
};
// xiaohong.name ='123'
// function readonly(obj) {
//     const result = {};
//     for (const key in obj) {
//         result["readonly" + key] = obj[key];
//     }
//     return result
// }

// *1 返回一个对象obj
// *2 遍历obj（js对象 ts接口） in -> mapped keyof -> lookup
// *3 加上 readonly 关键字 新的知识点
// *4 通过key 来获取obj接口 里面的indexed
//https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
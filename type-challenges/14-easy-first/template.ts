type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T['length'] extends 0 ? never: T[0]


// type First<T extends any[]> = T['length'] extends 0 ? never: T[0]

//T===[]
//js

// 1.extends 类型条件判断
// 2.获取tuple的length的属性 indexed
// 3.extends union 判断的规则
// 4.infer 的使用

const first = (arr) => {
    // arr 是不是一个空数组 如果是的话 那么返回never
    if (arr.length === 0) return 'never';
    return arr[0]
}
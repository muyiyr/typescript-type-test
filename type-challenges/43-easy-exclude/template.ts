type MyExclude<T, U> = T extends U ? never : T;


//js
//['a', 'b', 'c']

//['a']

// function MyExclude(T, U:any[]) {
//     const result =[]
//     for (let i = 0; i < T, length; i++){
//         const t = T[i]
//         let boo = false;
//         for (let j = 0; j < U.length; j++){
//             const u = U[j];
//             if (t === u) {
//                 boo = true;
//             }
//         }
//         if (!boo) {
//             result.push(t)
//         }
//     }
//     return result;

//     if (!U.includes(t)) {
//         result.push(t);
//     }
// }


//  https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

function test(s, c) {
    const n = s.length;
    const ans = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {

    }
}

//Extract Exclude
// pick exclude

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    let res = [];

    // prev记录上一个字符C出现的位置
    // 因为S是[0, 10000]，所以直接初始化为-10000表示相对小即可
    let prev = -10001;

    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) == C) {
            prev = i;
        }
        res[i] = i - prev;
    }

    // 初始化为相对大值即可
    prev = 10001;
    for (let i = S.length - 1; i >= 0; i--) {
        if (S.charAt(i) == C) {
            prev = i;
        }
        // 取向左和向右中的最小值
        res[i] = Math.min(res[i], prev - i);
    }

    return res;
};


type ToArray<Type> = [Type] extends 'x' ? string : number;

type StrArrOrNumArr = ToArray<'x' | 'y'>;

type A2 = 'x' | 'y' extends 'x' ? string : number

function demo(param: 'x') { }

const a: 'x' | 'y';


type ObjType = { a: number } & { c: boolean };

/** 深度Partial */
type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
    }
    : T;

/** 移除对象属性的`null`值 */
type NonNullableObject<T> = {
    [K in keyof T]-?: NonNullable<T[K]>;
};

/** 深度移除对象属性的`null`值 */
type DeepNonNullableObject<T> = T extends object
    ? {
        [K in keyof T]-?: DeepNonNullableObject<T[K]>;
    }
    : NonNullable<T>;
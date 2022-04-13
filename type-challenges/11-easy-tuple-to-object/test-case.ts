import { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type r = typeof tuple;
// 1. 字面量类型

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

//const let js 世界
// type interface 类型世界

// 1.typeof  https://www.typescriptlang.org/docs/handbook/2/typeof-types.html#handbook-content
// 2.字面量类型
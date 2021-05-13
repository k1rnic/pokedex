/* eslint-disable @typescript-eslint/no-unused-vars */

// TASK #1

const concat = (partOne: string, partTwo: string) => partOne + partTwo;

// TASK #2
interface UselessInfo {
  howIDoIt: string;
  someArray: Array<string | number>;
  withData?: UselessInfo[];
}

const myHomeTask: UselessInfo = {
  howIDoIt: 'I Do It Wel',
  someArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', someArray: ['string one', 23] }],
};

// TASK #3

type ReduceFn<T> = <T1>(fn: (acc: T1, value: T, i?: number, arr?: T[]) => T1, initialValue: T1) => T1;

interface Arr<T> {
  [index: number]: T;
  reduce: ReduceFn<T>;
}

const arr: Arr<string> = ['Hello World', '!'];
const result = arr.reduce(concat, '');

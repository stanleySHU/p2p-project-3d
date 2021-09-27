
export interface Type extends Function { new (...args: unknown[]): unknown; };
export interface Factory { (...args: unknown[]): unknown };
export type UndefinedAble<T> = T | undefined;
export type Nullable<T> = T | null;
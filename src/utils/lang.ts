export interface Type extends Function { new (...args): any; }

export function isPresent(obj: any): boolean {
    return obj !== undefined && obj !== null;
}

export function isAllPresent(...args: any[]): boolean {
    for (let item of args) {
        if (isBlank(item)) return false;
    }
    return true;
}

export function isBlank(obj: any): boolean {
    return obj === undefined || obj === null;
}

export function isString(obj: any): obj is string {
    return typeof obj === "string";
  }
  
  export function isFunction(obj: any): obj is Function {
    return typeof obj === "function";
  }
  
  export function isType(obj: any): obj is Type {
    return isFunction(obj);
  }
  
  export function isStringMap(obj: any): boolean {
    return typeof obj === "object" && obj !== null;
  }
  
  export function isArray(obj: any): boolean {
    return Array.isArray(obj);
  }
  
  export function isNumber(obj): obj is number {
    return typeof obj === "number";
  }
  
  export function isDate(obj): obj is Date {
    return obj instanceof Date && !isNaN(obj.valueOf());
  }
  
  export function isEmptyObject(obj): boolean {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  export function isJsObject(o: any): boolean {
    return o !== null && (typeof o === "function" || typeof o === "object");
  }
  
import { Type } from "../utils/customType";
import injector from "./injector";

export const REGISTER_METADATA_KEY = 'REGISTER_METADATA_KEY';
export const REGISTER_CREATE_INFO_KEY = 'REGISTER_CREATE_INFO_KEY';

export type RegisterCategory = 'Node' | 'Camera';

export interface RegisterMetadataOptions {
    tag: string,
    categorys: RegisterCategory[]
}

export function Register(metadata: RegisterMetadataOptions) {
    return (target: any) => {
        Reflect.defineProperty(target, REGISTER_METADATA_KEY, {value: metadata, writable: false});
        return target;
    };
}

function register(component: Type) {
    // if (REGISTER_METADATA_KEY in component) {
    //     let metadata:RegisterMetadataOptions = component[REGISTER_METADATA_KEY];
    //     injector.map(getRegisterKey(metadata.tag)).toFactory(() => component);
    // } else {
    //     throw `Invalid component, messing matedata of ${component}`;
    // }
} 

export function getRegisterKey(tag: string) {
    return `Component:${tag}`;
}

export function enable(compnents: Type | Type[]) {
    if (Array.isArray(compnents)) {
        compnents.forEach(e => register(e));
    } else {
        register(compnents);
    }
}
import { MultiLine as BabylonMultiLine } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type IMultiLineInitial<T> = IControlInitial<T> & {}
export type IMultiLineProps = IMultiLineInitial<BabylonMultiLine>;

export function MultiLineHOC<T>(EL: React.FC<T>) {
    return (props: T & IMultiLineProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`MultiLine ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonMultiLine(name);
                console.log(`MultiLine ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(MultiLineHOC(e));
}

export const P2PMultiLine = buildExtends(ChildHOC(null));
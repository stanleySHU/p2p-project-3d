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
            if (instance && !instance.current) {
                instance.current = new BabylonMultiLine(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiLineHOC(e));
}

export const P2PMultiLine = buildExtends<IMultiLineProps>(ChildHOC(null));
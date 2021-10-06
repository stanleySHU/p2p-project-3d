import { Line as BabylonLine } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type ILineInitial<T> = IControlInitial<T> & {}
export type ILineProps = ILineInitial<BabylonLine>;

export function LineHOC<T>(EL: React.FC<T>) {
    return (props: T & ILineProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`Line ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonLine(name);
                console.log(`Line ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(LineHOC(e));
}

export const P2PLine = buildExtends(ChildHOC(null));
import { DisplayGrid as BabylonDisplayGrid } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type IDisplayGridInitial<T> = IControlInitial<T> & {}
export type IDisplayGridProps = IDisplayGridInitial<BabylonDisplayGrid>;

export function DisplayGridHOC<T>(EL: React.FC<T>) {
    return (props: T & IDisplayGridProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`DisplayGrid ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonDisplayGrid(name);
                console.log(`DisplayGrid ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(DisplayGridHOC(e));
}

export const P2PDisplayGrid = buildExtends(ChildHOC(null));
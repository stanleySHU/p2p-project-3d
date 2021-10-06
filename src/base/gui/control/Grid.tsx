import { Grid as BabylonGrid } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IContainerInitial, buildExtends as _buildExtends } from './Container';

export type IGridInitial<T> = IContainerInitial<T> & {}
export type IGridProps = IGridInitial<BabylonGrid>;

export function GridHOC<T>(EL: React.FC<T>) {
    return (props: T & IGridProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`Grid ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonGrid(name);
                console.log(`Grid ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(GridHOC(e));
}

export const P2PGrid = buildExtends(ChildHOC(null));
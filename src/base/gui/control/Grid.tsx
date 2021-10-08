import { Grid as BabylonGrid} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Container'

export type IGridProps = IComponentProps<BabylonGrid> & {
    name?: string 
}

export type IGridParams = {

}

function GridHOC(EL: React.FC) {
    return (props: IGridParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(GridHOC(e));
}

function _(props: IGridProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonGrid(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PGrid = buildExtends<IGridProps & IGridParams>(_); 
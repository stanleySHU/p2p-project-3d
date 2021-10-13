import { Grid as BabylonGrid} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IContainerParams } from './Container'

export type IGridProps = IComponentProps<BabylonGrid> & {
    name?: string 
}

export type IGridParams<T> = IContainerParams<T> & {

}

function GridHOC(EL: React.FC) {
    return (props: IGridParams<BabylonGrid>) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(GridHOC(e));
}

function _(props: IGridProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonGrid(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PGrid = buildExtends<IGridProps & IGridParams<BabylonGrid>>(_); 
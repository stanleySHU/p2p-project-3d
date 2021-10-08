import { DisplayGrid as BabylonDisplayGrid} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type IDisplayGridProps = IComponentProps<BabylonDisplayGrid> & {
    name?: string 
}

export type IDisplayGridParams = {

}

function DisplayGridHOC(EL: React.FC) {
    return (props: IDisplayGridParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DisplayGridHOC(e));
}

function _(props: IDisplayGridProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonDisplayGrid(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDisplayGrid = buildExtends<IDisplayGridProps & IDisplayGridParams>(_); 
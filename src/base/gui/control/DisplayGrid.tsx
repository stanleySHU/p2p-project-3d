import { DisplayGrid as BabylonDisplayGrid} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type IDisplayGridProps = IComponentProps<BabylonDisplayGrid> & {
    name?: string 
}

export type IDisplayGridParams = IControlParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonDisplayGrid(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDisplayGrid = buildExtends<IDisplayGridProps & IDisplayGridParams>(_); 
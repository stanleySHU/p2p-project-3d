import { Line as BabylonLine} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type ILineProps = IComponentProps<BabylonLine> & {
    name?: string 
}

export type ILineParams = {

}

function LineHOC(EL: React.FC) {
    return (props: ILineParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LineHOC(e));
}

function _(props: ILineProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonLine(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PLine = buildExtends<ILineProps & ILineParams>(_); 
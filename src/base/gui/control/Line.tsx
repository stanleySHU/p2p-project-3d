import { Line as BabylonLine} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type ILineProps = IComponentProps<BabylonLine> & {
    name?: string 
}

export type ILineParams = IControlParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonLine(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PLine = buildExtends<ILineProps & ILineParams>(_); 
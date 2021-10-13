import { Ellipse as BabylonEllipse} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IContainerParams } from './Container'

export type IEllipseProps = IComponentProps<BabylonEllipse> & {
    name?: string 
}

export type IEllipseParams<T> = IContainerParams<T> & {

}

function EllipseHOC(EL: React.FC) {
    return (props: IEllipseParams<BabylonEllipse>) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(EllipseHOC(e));
}

function _(props: IEllipseProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonEllipse(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PEllipse = buildExtends<IEllipseProps & IEllipseParams<BabylonEllipse>>(_); 
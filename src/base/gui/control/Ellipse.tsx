import { Ellipse as BabylonEllipse} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Container'

export type IEllipseProps = IComponentProps<BabylonEllipse> & {
    name?: string 
}

export type IEllipseParams = {

}

function EllipseHOC(EL: React.FC) {
    return (props: IEllipseParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(EllipseHOC(e));
}

function _(props: IEllipseProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonEllipse(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PEllipse = buildExtends<IEllipseProps & IEllipseParams>(_); 
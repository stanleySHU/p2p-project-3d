import { Rectangle as BabylonRectangle} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IContainerParams } from './Container'

export type IRectangleProps = IComponentProps<BabylonRectangle> & {
    name?: string
}

export type IRectangleParams<T> = IContainerParams<T> & {

}

function RectangleHOC(EL: React.FC) {
    return (props: IRectangleParams<BabylonRectangle>) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RectangleHOC(e));
}

function _(props: IRectangleProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonRectangle(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRectangle = buildExtends<IRectangleProps & IRectangleParams<BabylonRectangle>>(_); 
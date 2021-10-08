import { Rectangle as BabylonRectangle} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Container'

export type IRectangleProps = IComponentProps<BabylonRectangle> & {
    name?: string
}

export type IRectangleParams = {

}

function RectangleHOC(EL: React.FC) {
    return (props: IRectangleParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RectangleHOC(e));
}

function _(props: IRectangleProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonRectangle(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRectangle = buildExtends<IRectangleProps & IRectangleParams>(_); 
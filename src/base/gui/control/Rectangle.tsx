import { Rectangle as BabylonRectangle } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IContainerInitial, buildExtends as _buildExtends } from './Container';

export type IRectangleInitial<T> = IContainerInitial<T> & {}
export type IRectangleProps = IRectangleInitial<BabylonRectangle>;

export function RectangleHOC<T>(EL: React.FC<T>) {
    return (props: T & IRectangleProps) => {
        const { instance, name } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonRectangle(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RectangleHOC(e));
}

export const P2PRectangle = buildExtends<IRectangleProps>(ChildHOC(null));
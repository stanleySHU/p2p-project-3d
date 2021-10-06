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
            console.log(`Rectangle ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonRectangle(name);
                console.log(`Rectangle ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(RectangleHOC(e));
}

export const P2PRectangle = buildExtends(ChildHOC(null));
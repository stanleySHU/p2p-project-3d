import { Ellipse as BabylonEllipse } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IContainerInitial, buildExtends as _buildExtends } from './Container';

export type IEllipseInitial<T> = IContainerInitial<T> & {}
export type IEllipseProps = IEllipseInitial<BabylonEllipse>;

export function EllipseHOC<T>(EL: React.FC<T>) {
    return (props: T & IEllipseProps) => {
        const { instance, name } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonEllipse(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(EllipseHOC(e));
}

export const P2PEllipse = buildExtends<IEllipseProps>(ChildHOC(null));
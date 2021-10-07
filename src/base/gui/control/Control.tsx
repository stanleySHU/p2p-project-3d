import { Control as BabylonControl } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component'; 

export type IControlInitial<T> = IComponentProps<T> & {}
export type IControlProps = IControlInitial<BabylonControl>;

export function ControlHOC<T>(EL: React.FC<T>) {
    return (props: T & IControlProps) => {
        const { instance, name } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonControl(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ControlHOC(e));
}

export const P2PControl = buildExtends<IControlProps>(ChildHOC(null));
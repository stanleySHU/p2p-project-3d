import { Control as BabylonControl } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component'; 

export type IControlInitial<T> = IComponentProps<T> & {}
export type IControlProps = IControlInitial<BabylonControl>;

export function ControlHOC<T>(EL: React.FC<T>) {
    return (props: T & IControlProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`Control ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonControl(name);
                console.log(`Control ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(ControlHOC(e));
}

export const P2PControl = buildExtends(ChildHOC(null));
import { Container as BabylonContainer } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type IContainerInitial<T> = IControlInitial<T> & {}
export type IContainerProps = IContainerInitial<BabylonContainer>;

export function ContainerHOC<T>(EL: React.FC<T>) {
    return (props: T & IContainerProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`Container ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonContainer(name);
                console.log(`Container ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(ContainerHOC(e));
}

export const P2PContainer = buildExtends(ChildHOC(null));
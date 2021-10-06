import { StackPanel as BabylonStackPanel } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IContainerInitial, buildExtends as _buildExtends } from './Container';

export type IStackPanelInitial<T> = IContainerInitial<T> & {}
export type IStackPanelProps = IStackPanelInitial<BabylonStackPanel>;

export function StackPanelHOC<T>(EL: React.FC<T>) {
    return (props: T & IStackPanelProps) => {
        const { instance, name } = props;
        useEffect(() => {
            console.log(`StackPanel ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonStackPanel(name);
                console.log(`StackPanel ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(StackPanelHOC(e));
}

export const P2PStackPanel = buildExtends(ChildHOC(null));
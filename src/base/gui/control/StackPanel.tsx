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
            if (instance && !instance.current) {
                instance.current = new BabylonStackPanel(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StackPanelHOC(e));
}

export const P2PStackPanel = buildExtends<IStackPanelProps>(ChildHOC(null));
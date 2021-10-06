import { ToggleButton as BabylonToggleButton } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IRectangleInitial, buildExtends as _buildExtends } from './Rectangle';

export type IToggleButtonInitial<T> = IRectangleInitial<T> & {
    group?: string
}
export type IToggleButtonProps = IToggleButtonInitial<BabylonToggleButton>;

export function ToggleButtonHOC<T>(EL: React.FC<T>) {
    return (props: T & IToggleButtonProps) => {
        const { instance, name, group } = props;
        useEffect(() => {
            console.log(`ToggleButton ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonToggleButton(name, group);
                console.log(`ToggleButton ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(ToggleButtonHOC(e));
}

export const P2PToggleButton = buildExtends(ChildHOC(null));
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
            if (instance && !instance.current) {
                instance.current = new BabylonToggleButton(name, group);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ToggleButtonHOC(e));
}

export const P2PToggleButton = buildExtends<IToggleButtonProps>(ChildHOC(null));
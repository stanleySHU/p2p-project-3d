import { Button as BabylonButton } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IRectangleInitial, buildExtends as _buildExtends } from './Rectangle';

export type IButtonInitial<T> = IRectangleInitial<T> & {}
export type IButtonProps = IButtonInitial<BabylonButton>;

export function ButtonHOC<T>(EL: React.FC<T>) {
    return (props: T & IButtonProps) => {
        const { instance, name } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonButton(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ButtonHOC(e));
}

export const P2PButton = buildExtends<IButtonProps>(ChildHOC(null));
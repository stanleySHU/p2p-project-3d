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
            console.log(`Button ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonButton(name);
                console.log(`Button ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(ButtonHOC(e));
}

export const P2PButton = buildExtends(ChildHOC(null));
import { FocusableButton as BabylonFocusableButton } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IButtonInitial, buildExtends as _buildExtends } from './Button';

export type IFocusableButtonInitial<T> = IButtonInitial<T> & {}
export type IFocusableButtonProps = IFocusableButtonInitial<BabylonFocusableButton>;

export function FocusableButtonHOC<T>(EL: React.FC<T>) {
    return (props: T & IFocusableButtonProps) => {
        const { instance, name } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonFocusableButton(name);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FocusableButtonHOC(e));
}

export const P2PFocusableButton = buildExtends<IFocusableButtonProps>(ChildHOC(null));
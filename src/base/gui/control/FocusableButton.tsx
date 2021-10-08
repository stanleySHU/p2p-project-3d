import { FocusableButton as BabylonFocusableButton} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Button'

export type IFocusableButtonProps = IComponentProps<BabylonFocusableButton> &{
    name?: string
}

export type IFocusableButtonParams = {

}

function FocusableButtonHOC(EL: React.FC) {
    return (props: IFocusableButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FocusableButtonHOC(e));
}

function _(props: IFocusableButtonProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonFocusableButton(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFocusableButton = buildExtends<IFocusableButtonProps & IFocusableButtonParams>(_); 
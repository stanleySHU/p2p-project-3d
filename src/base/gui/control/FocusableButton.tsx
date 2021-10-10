import { FocusableButton as BabylonFocusableButton} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IButtonParams } from './Button'

export type IFocusableButtonProps = IComponentProps<BabylonFocusableButton> &{
    name?: string
}

export type IFocusableButtonParams = IButtonParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonFocusableButton(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFocusableButton = buildExtends<IFocusableButtonProps & IFocusableButtonParams>(_); 
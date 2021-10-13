import { RadioButton as BabylonRadioButton} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type IRadioButtonProps = IComponentProps<BabylonRadioButton> & {
    name?: string 
}

export type IRadioButtonParams<T> = IControlParams<T> & {

}

function RadioButtonHOC(EL: React.FC) {
    return (props: IRadioButtonParams<BabylonRadioButton>) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RadioButtonHOC(e));
}

function _(props: IRadioButtonProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonRadioButton(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRadioButton = buildExtends<IRadioButtonProps & IRadioButtonParams<BabylonRadioButton>>(_); 
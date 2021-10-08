import { RadioButton as BabylonRadioButton} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type IRadioButtonProps = IComponentProps<BabylonRadioButton> & {
    name?: string 
}

export type IRadioButtonParams = {

}

function RadioButtonHOC(EL: React.FC) {
    return (props: IRadioButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RadioButtonHOC(e));
}

function _(props: IRadioButtonProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonRadioButton(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRadioButton = buildExtends<IRadioButtonProps & IRadioButtonParams>(_); 
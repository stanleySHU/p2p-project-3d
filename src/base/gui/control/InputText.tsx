import { InputText as BabylonInputText} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type IInputTextProps = IComponentProps<BabylonInputText> & {
    name?: string,
    text?: string
}

export type IInputTextParams = {

}

function InputTextHOC(EL: React.FC) {
    return (props: IInputTextParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(InputTextHOC(e));
}

function _(props: IInputTextProps) {
    const { instance, name, text } = props;
    useEffect(() => {
        instance!.current = new BabylonInputText(name, text);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PInputText = buildExtends<IInputTextProps & IInputTextParams>(_); 
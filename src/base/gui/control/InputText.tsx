import { InputText as BabylonInputText} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type IInputTextProps = IComponentProps<BabylonInputText> & {
    name?: string,
    text?: string
}

export type IInputTextParams<T> = IControlParams<T> & {

}

function InputTextHOC(EL: React.FC) {
    return (props: IInputTextParams<BabylonInputText>) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(InputTextHOC(e));
}

function _(props: IInputTextProps) {
    const { init, name, text } = props;
    useLayoutEffect(() => {
        let obj = new BabylonInputText(name, text);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PInputText = buildExtends<IInputTextProps & IInputTextParams<BabylonInputText>>(_); 
import { Checkbox as BabylonCheckbox} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type ICheckboxProps = IComponentProps<BabylonCheckbox> & {
    name?: string
}

export type ICheckboxParams = {

}

function CheckboxHOC(EL: React.FC) {
    return (props: ICheckboxParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CheckboxHOC(e));
}

function _(props: ICheckboxProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonCheckbox(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCheckbox = buildExtends<ICheckboxProps & ICheckboxParams>(_); 
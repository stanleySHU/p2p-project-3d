import { BaseSlider as BabylonBaseSlider} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type IBaseSliderProps = IComponentProps<BabylonBaseSlider> & {
    name?: string 
}

export type IBaseSliderParams = {

}

function BaseSliderHOC(EL: React.FC) {
    return (props: IBaseSliderParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BaseSliderHOC(e));
}

function _(props: IBaseSliderProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonBaseSlider(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBaseSlider = buildExtends<IBaseSliderProps & IBaseSliderParams>(_); 
import { BaseSlider as BabylonBaseSlider} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type IBaseSliderProps = IComponentProps<BabylonBaseSlider> & {
    name?: string 
}

export type IBaseSliderParams = IControlParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonBaseSlider(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBaseSlider = buildExtends<IBaseSliderProps & IBaseSliderParams>(_); 
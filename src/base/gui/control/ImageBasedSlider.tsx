import { ImageBasedSlider as BabylonImageBasedSlider} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IBaseSliderParams } from './BaseSlider'

export type IImageBasedSliderProps = IComponentProps<BabylonImageBasedSlider> & {
    name?: string
}

export type IImageBasedSliderParams = IBaseSliderParams & {

}

function ImageBasedSliderHOC(EL: React.FC) {
    return (props: IImageBasedSliderParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageBasedSliderHOC(e));
}

function _(props: IImageBasedSliderProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonImageBasedSlider(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImageBasedSlider = buildExtends<IImageBasedSliderProps & IImageBasedSliderParams>(_); 
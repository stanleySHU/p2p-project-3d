import { ImageScrollBar as BabylonImageScrollBar} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IBaseSliderParams } from './BaseSlider'

export type IImageScrollBarProps = IComponentProps<BabylonImageScrollBar> & {
    name?: string 
}

export type IImageScrollBarParams<T> = IBaseSliderParams<T> & {

}

function ImageScrollBarHOC(EL: React.FC) {
    return (props: IImageScrollBarParams<BabylonImageScrollBar>) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageScrollBarHOC(e));
}

function _(props: IImageScrollBarProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonImageScrollBar(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImageScrollBar = buildExtends<IImageScrollBarProps & IImageScrollBarParams<BabylonImageScrollBar>>(_); 
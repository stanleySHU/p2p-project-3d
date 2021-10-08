import { ImageScrollBar as BabylonImageScrollBar} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './BaseSlider'

export type IImageScrollBarProps = IComponentProps<BabylonImageScrollBar> & {
    name?: string 
}

export type IImageScrollBarParams = {

}

function ImageScrollBarHOC(EL: React.FC) {
    return (props: IImageScrollBarParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageScrollBarHOC(e));
}

function _(props: IImageScrollBarProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonImageScrollBar(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImageScrollBar = buildExtends<IImageScrollBarProps & IImageScrollBarParams>(_); 
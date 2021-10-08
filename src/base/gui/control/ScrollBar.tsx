import { ScrollBar as BabylonScrollBar} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './BaseSlider'

export type IScrollBarProps = IComponentProps<BabylonScrollBar> & {
    name?: string
}

export type IScrollBarParams = {

}

function ScrollBarHOC(EL: React.FC) {
    return (props: IScrollBarParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ScrollBarHOC(e));
}

function _(props: IScrollBarProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonScrollBar(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PScrollBar = buildExtends<IScrollBarProps & IScrollBarParams>(_); 
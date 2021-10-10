import { ScrollBar as BabylonScrollBar} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IBaseSliderParams } from './BaseSlider'

export type IScrollBarProps = IComponentProps<BabylonScrollBar> & {
    name?: string
}

export type IScrollBarParams = IBaseSliderParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonScrollBar(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PScrollBar = buildExtends<IScrollBarProps & IScrollBarParams>(_); 
import { ScrollViewer as BabylonScrollViewer} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Rectangle'

export type IScrollViewerProps = IComponentProps<BabylonScrollViewer> & {
    name?: string 
}

export type IScrollViewerParams = {

}

function ScrollViewerHOC(EL: React.FC) {
    return (props: IScrollViewerParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ScrollViewerHOC(e));
}

function _(props: IScrollViewerProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonScrollViewer(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PScrollViewer = buildExtends<IScrollViewerProps & IScrollViewerParams>(_); 
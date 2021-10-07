import { ScrollViewer as BabylonScrollViewer} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Rectangle'

export type IScrollViewerProps = {
    name?: string | undefined
}

export type IScrollViewerParams = {

}

function ScrollViewerHOC<T>(EL: React.FC<T>) {
    return (props: T & IScrollViewerParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ScrollViewerHOC(e));
}

function _(props: IScrollViewerProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonScrollViewer(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PScrollViewer = buildExtends<IScrollViewerProps & IScrollViewerParams>(_); 
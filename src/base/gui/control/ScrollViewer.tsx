import { ScrollViewer as BabylonScrollViewer } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IRectangleInitial, buildExtends as _buildExtends } from './Rectangle';

export type IScrollViewerInitial<T> = IRectangleInitial<T> & {
    isImageBased?: boolean
}
export type IScrollViewerProps = IScrollViewerInitial<BabylonScrollViewer>;

export function ScrollViewerHOC<T>(EL: React.FC<T>) {
    return (props: T & IScrollViewerProps) => {
        const { instance, name, isImageBased } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonScrollViewer(name, isImageBased);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ScrollViewerHOC(e));
}

export const P2PScrollViewer = buildExtends<IScrollViewerProps>(ChildHOC(null));
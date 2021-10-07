import { SixDofDragBehavior as BabylonSixDofDragBehavior } from "@babylonjs/core";
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component';

export type ISixDofDragBehaviorProps = IComponentProps<BabylonSixDofDragBehavior> & {}

function SixDofDragBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & ISixDofDragBehaviorProps) => {
        const { instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonSixDofDragBehavior();
            }
        }, [])
    
        return <EL {...props}/>;
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(SixDofDragBehaviorHOC(e));
}

export const P2PSixDofDragBehavior = buildExtends<ISixDofDragBehaviorProps>(ChildHOC(null));
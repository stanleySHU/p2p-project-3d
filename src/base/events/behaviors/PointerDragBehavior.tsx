import { PointerDragBehavior as BabylonPointerDragBehavior, Vector3 } from "@babylonjs/core";
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component';

export type IPointerDragBehaviorProps = IComponentProps<BabylonPointerDragBehavior> & {
    options?: {
        dragAxis?: Vector3;
        dragPlaneNormal?: Vector3;
    }
}

function PointerDragBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IPointerDragBehaviorProps) => {
        const { instance, name, options } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonPointerDragBehavior(options);
            }
        }, [])
    
        return <EL {...props}/>;
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(PointerDragBehaviorHOC(e));
}

export const P2PPointerDragBehavior = buildExtends<IPointerDragBehaviorProps>(ChildHOC(null));
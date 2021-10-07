import { MultiPointerScaleBehavior as BabylonMultiPointerScaleBehavior} from "@babylonjs/core";
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component';

export type IMultiPointerScaleBehaviorProps = IComponentProps<BabylonMultiPointerScaleBehavior> & {}

function MultiPointerScaleBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IMultiPointerScaleBehaviorProps) => {
        const { instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonMultiPointerScaleBehavior();
            }
        }, [])
    
        return <EL {...props}/>;
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiPointerScaleBehaviorHOC(e));
}

export const P2PMultiPointerScaleBehavior = buildExtends<IMultiPointerScaleBehaviorProps>(ChildHOC(null));
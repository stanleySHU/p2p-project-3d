import { FadeInOutBehavior as BabylonFadeInOutBehavior } from "@babylonjs/core";
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component';

export type IFadeInOutBehaviorProps = IComponentProps<BabylonFadeInOutBehavior> & {}

function FadeInOutBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IFadeInOutBehaviorProps) => {
        const { instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonFadeInOutBehavior();
                console.log(`FadeInOutBehavior ${name} created`);
            }
        }, [])
    
        return <EL {...props}/>;
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(FadeInOutBehaviorHOC(e));
}

export const P2PFadeInOutBehavior = buildExtends<IFadeInOutBehaviorProps>(ChildHOC(null));
import { AutoRotationBehavior as BabylonAutoRotationBehavior } from "@babylonjs/core";
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component';

export type IAutoRotationBehaviorProps = IComponentProps<BabylonAutoRotationBehavior> & {}

function AutoRotationBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IAutoRotationBehaviorProps) => {
        const { instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonAutoRotationBehavior();
                console.log(`AutoRotationBehavior ${name} created`);
            }
        }, [])
    
        return <EL {...props}/>;
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(AutoRotationBehaviorHOC(e));
}

export const P2PAutoRotationBehavior = buildExtends<IAutoRotationBehaviorProps>(ChildHOC(null));
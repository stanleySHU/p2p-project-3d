import { BouncingBehavior as BabylonBouncingBehavior } from '@babylonjs/core'; 
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component';

export type IBouncingBehaviorProps = IComponentProps<BabylonBouncingBehavior> & {}

function BouncingBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IBouncingBehaviorProps) => {
        const { instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonBouncingBehavior();
                console.log(`BouncingBehavior ${name} created`);
            }
        }, [])
    
        return <EL {...props}/>;
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(BouncingBehaviorHOC(e));
}

export const P2PBouncingBehavior = buildExtends<IBouncingBehaviorProps>(ChildHOC(null));
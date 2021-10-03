import { FramingBehavior as BabylonFramingBehavior } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component';

export type IFramingBehaviorProps = IComponentProps<BabylonFramingBehavior> & {}

function FramingBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IFramingBehaviorProps) => {
        const { instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonFramingBehavior();
                console.log(`FramingBehavior ${name} created`);
            }
        }, [])
    
        return <EL {...props}/>;
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(FramingBehaviorHOC(e));
}

export const P2PFramingBehavior = buildExtends<IFramingBehaviorProps>(ChildHOC(null));
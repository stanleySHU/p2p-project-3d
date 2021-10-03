import { AttachToBoxBehavior as BabylonAttachToBoxBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from '../../Component';

export type IAttachToBoxBehaviorProps = IComponentProps<BabylonAttachToBoxBehavior> & {
    ui: TransformNode
}

function AttachToBoxBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IAttachToBoxBehaviorProps) => {
        const { instance, name, ui } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonAttachToBoxBehavior(ui);
                console.log(`AttachToBoxBehavior ${name} created`);
            }
        }, [])
    
        return <EL {...props}/>;
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(AttachToBoxBehaviorHOC(e));
}

export const P2PAttachToBoxBehavior = buildExtends<IAttachToBoxBehaviorProps>(ChildHOC(null));
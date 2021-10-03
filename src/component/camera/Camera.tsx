import { Camera as BabylonCamera, Vector3 } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { EngineContext } from '../Engine';
import { INodeInitial, buildExtends as _buildExtends } from '../node/Node';
import { SceneContext } from '../Scene';

export type ICameraInitial<T> = INodeInitial<T> & {
    position: Vector3,
    setActiveOnSceneIfNoneActive?: boolean
};
export type ICameraProps = ICameraInitial<BabylonCamera> & ICameraOptions;

function CameraHOC<T>(EL: React.FC<T>) {
    return (props: T & ICameraProps) => {
        const { canvas } = useContext(EngineContext);
        const { scene } = useContext(SceneContext);
        const { instance, name, position, setActiveOnSceneIfNoneActive } = props;

        useEffect(() => {
            console.log(`camera ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonCamera(name, position, scene!, setActiveOnSceneIfNoneActive);
                console.log(`camera ${name} created`);
            }
            instance!.current.attachControl(canvas, true);
        }, []);
        
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CameraHOC(e));
};

export const P2PCamera = buildExtends<ICameraProps>(ChildHOC(null));

export type ICameraOptions = {
    
}
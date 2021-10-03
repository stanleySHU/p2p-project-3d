import { AssetsManager as BabylonAssetsManager } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from "../Component";
import { SceneContext } from "../scene/Scene";

export type IAssetsManagerInitial<T> = IComponentProps<T> & {};

function AssetsManagerHOC<T>(EL: React.FC<T>) {
    return (props: T & IAssetsManagerInitial<BabylonAssetsManager>) => {
        const { scene } = useContext(SceneContext);        
        const { name, instance, componentInstances } = props;

        useEffect(() => {
            console.log(props);
            console.log(`AssetsManager ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonAssetsManager(scene!);
                console.log(`AssetsManager ${name} created`);
            }

            for (let item of componentInstances!.current) {
                // console.log('1', item)
            }

            //resolve
        });

        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AssetsManagerHOC(e));
}

export const P2PAssetsManager = buildExtends(ChildHOC(null));
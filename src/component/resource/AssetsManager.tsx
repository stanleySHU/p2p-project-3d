import { AssetsManager as BabylonAssetsManager, Scene as BabylonScene } from "@babylonjs/core";
import React, { useEffect } from "react";
import { Action } from "../../page/PreloadRedux";
import { Nullable } from "../../utils/customType";
import { IComponentProps, buildExtends as _buildExtends, ChildHOC } from "../Component";

export type IAssetsManagerInitial<T> = IComponentProps<T> & {
    scene: Nullable<BabylonScene>,
    loadDispatch?: React.Dispatch<Action>
};
export type IAssetsManagerProps = IAssetsManagerInitial<BabylonAssetsManager>;

function AssetsManagerHOC<T>(EL: React.FC<T>) {
    return (props: T & IAssetsManagerProps) => {
        const { scene, name, instance, componentInstances } = props;

        useEffect(() => {
            console.log(props)
            console.log(`AssetsManager ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonAssetsManager(scene!);
                console.log(`AssetsManager ${name} created`);
            }
            //resolve
        });

        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AssetsManagerHOC(e));
}

export const P2PAssetsManager = buildExtends<IAssetsManagerProps>(ChildHOC(null));
import { AbstractMesh, Material as BabylonMaterial, Scene as BabylonScene, StandardMaterial, Texture } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { isAllPresent } from '../../utils/lang';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component'

export type IMaterialProps = IComponentProps & {
    name: string, 
    scene: BabylonScene, 
    doNotAdd?: boolean,
}

export type IMaterialParams = {
    assignToMeshByName?: string[],
    backFaceCulling?: boolean
}

export function MaterialHOC(EL: React.FC<IMaterialParams>) {
    return (props: IMaterialParams) => {
        const {instance, scene} = props as IMaterialProps;
        const {assignToMeshByName, backFaceCulling} = props;
        useLayoutEffect(() => {
            let observer = scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
                if (instance && assignToMeshByName && assignToMeshByName.indexOf(mesh.name) >= 0) {
                    mesh.material = instance;
                }
            });
            if (instance && assignToMeshByName) {
                scene.meshes.forEach((mesh) => {
                    if (assignToMeshByName.indexOf(mesh.name) >= 0) {
                        mesh.material = instance;
                    }
                });
            }
            return () => {
                scene.onMeshRemovedObservable.remove(observer);
            }
        }, [instance]);

        useEffect(() => {
            isAllPresent(backFaceCulling, instance) && (instance.backFaceCulling = backFaceCulling);
        }, [instance, backFaceCulling]);

        return <EL {...props}/>
    }
}

function _(props: IMaterialProps) {
    const { init, name, scene, doNotAdd } =  props;
    useLayoutEffect(() => {
        let obj  = new BabylonMaterial(name, scene, doNotAdd);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMaterial = getEL<IMaterialParams>(_, [
    MaterialHOC,
    ComponentHOC
]);
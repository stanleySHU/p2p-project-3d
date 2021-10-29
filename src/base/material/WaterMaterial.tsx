import { WaterMaterial as BabylonWaterMaterial } from '@babylonjs/materials';
import { Color3, Scene as BabylonScene, Vector2 } from '@babylonjs/core'; 
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { IMaterialParams, MaterialHOC } from './Material';
import { IPushMaterialParams, PushMaterialHOC } from './PushMaterial';
import { isAllPresent } from '../../utils/lang';

export type IWaterMaterialProps = IComponentProps & {
    name: string, 
    scene: BabylonScene,
    renderTargetSize?: Vector2
}

export type IWaterMaterialParams = {
    windForce?: number,
    waveHeight?: number,
    bumpHeight?: number,
    waveLength?: number,
    colorBlendFactor?: number,
    waterColor?: Color3,
    toRender?: string[]
}

function WaterMaterialHOC(EL: React.FC<IWaterMaterialParams>) {
    return (props: IWaterMaterialParams) => {
        const { instance, scene } = (props as IWaterMaterialProps & IComponentProps<BabylonWaterMaterial>);
        const { windForce, waveHeight, waveLength, bumpHeight, colorBlendFactor, waterColor, toRender } = props;
        useEffect(() => {
            isAllPresent(instance, windForce) && (instance.windForce = windForce);
        }, [instance, windForce]);
        useEffect(() => {
            isAllPresent(instance, waveHeight) && (instance.waveHeight = waveHeight);
        }, [instance, waveHeight]);
        useEffect(() => {
            isAllPresent(instance, waveLength) && (instance.waveLength = waveLength);
        }, [instance, waveLength]);
        useEffect(() => {
            isAllPresent(instance, bumpHeight) && (instance.bumpHeight = bumpHeight);
        }, [instance, bumpHeight]);
        useEffect(() => {
            isAllPresent(instance, colorBlendFactor) && (instance.colorBlendFactor = colorBlendFactor);
        }, [instance, colorBlendFactor]);
        useEffect(() => {
            isAllPresent(instance, waterColor) && (instance.waterColor = waterColor);
        }, [instance, waterColor]);
        useLayoutEffect(() => {
            let observer = scene.onNewMeshAddedObservable.add((mesh) => {
                if (instance && toRender && toRender.indexOf(mesh.name) >= 0) {
                    mesh.material = instance;
                }
            });
            if (instance && toRender) {
                scene.meshes.forEach((mesh) => {
                    if (toRender.indexOf(mesh.name) >= 0) {
                        mesh.material = instance;
                    }
                });
            }
            return () => {
                scene.onNewMeshAddedObservable.remove(observer);
            }
        }, [instance]);
        return <EL {...props}/>
    }
}

function _(props: IWaterMaterialProps) {
    const { init, name, scene, parentInstance, renderTargetSize } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonWaterMaterial(name, scene, renderTargetSize);
        init!(obj);
        // obj.addToRenderList
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PWaterMaterial = getEL<IMaterialParams & IPushMaterialParams & IWaterMaterialParams & IWaterMaterialProps>(_, [
    WaterMaterialHOC,
    PushMaterialHOC,
    MaterialHOC,
    ComponentHOC
]);
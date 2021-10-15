import { Image as BabylonImage} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { Nullable } from '../../../utils/customType';
import { isAllPresent } from '../../../utils/lang';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type IImageProps = IComponentProps & {
    name?: string,
    url?: Nullable<string>
}

export type IImageParams = {
    stretch?: number,
    cellId?: number, //https://playground.babylonjs.com/#K60448#10
    cellWidth?: number,
    cellHeight?: number,
    sourceLeft?: number,
    sourceTop?: number,
    sourceWidth?: number,
    sourceHeight?: number
}

function CellHOC(EL: React.FC<IImageParams>) {
    return (props: IImageParams) => {
        const instance:BabylonImage = (props as any).instance;
        const { cellId, cellWidth, cellHeight } = props;
        useEffect(() => {
            isAllPresent(cellId, instance) && (instance.cellId = cellId);
        }, [cellId, instance]);
        useEffect(() => {
            isAllPresent(cellWidth, instance) && (instance.cellWidth = cellWidth);
        }, [cellWidth, instance]);
        useEffect(() => {
            isAllPresent(cellHeight, instance) && (instance.cellHeight = cellHeight);
        }, [cellHeight, instance]);
        return <EL {...props}/>
    }
}

function SourceHOC(EL: React.FC<IImageParams>) {
    return (props: IImageParams) => {
        const instance:BabylonImage = (props as any).instance;
        const { sourceLeft, sourceTop, sourceWidth, sourceHeight } = props;
        useEffect(() => {
            isAllPresent(instance, sourceLeft) && (instance.sourceLeft = sourceLeft);
        }, [sourceLeft, instance]);
        useEffect(() => {
            isAllPresent(instance, sourceTop) && (instance.sourceTop = sourceTop);
        }, [sourceTop, instance]);
        useEffect(() => {
            isAllPresent(instance, sourceWidth) && (instance.sourceWidth = sourceWidth);
        }, [sourceWidth, instance]);
        useEffect(() => {
            isAllPresent(instance, sourceHeight) && (instance.sourceHeight = sourceHeight);
        }, [sourceHeight, instance]);
        return <EL {...props}/>
    }
}

function _ImageHOC(EL: React.FC<IImageParams>) {
    return (props: IImageParams) => {
        const instance:BabylonImage = (props as any).instance;
        const { stretch } = props;
        useEffect(() => {
            isAllPresent(instance) && (instance.stretch = stretch || BabylonImage.STRETCH_UNIFORM);
        }, [stretch, instance]);
        return <EL {...props}/>
    }
}

export function ImageHOC(EL: any) {
    return getEL(EL, [
        CellHOC,
        SourceHOC,
        _ImageHOC
    ]);
}

function _(props: IImageProps) {
    const { init, name, url } = props;
    useLayoutEffect(() => {
        let obj = new BabylonImage(name, url);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PImage = getEL<IComponentProps & IControlParams & IImageParams & IImageProps>(_, [
    ImageHOC,
    ControlHOC,
    ComponentHOC
])
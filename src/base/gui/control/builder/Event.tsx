import { EventState, Observer, Vector2 } from "@babylonjs/core";
import { Control, Vector2WithInfo } from "@babylonjs/gui";
import React, { useEffect, useRef } from "react";
import { isAllPresent } from "../../../../utils/lang";

export type IEventParams = {
    handlePointerMove?: (eventData: Vector2, eventState: EventState) => void,
    handlePointerEnter?: (eventData: Control, eventState: EventState) => void,
    handlePointerOut?: (eventData: Control, eventState: EventState) => void,
    handlePointerDown?: (eventData: Vector2WithInfo, eventState: EventState) => void,
    handlePointerUp?: (eventData: Vector2WithInfo, eventState: EventState) => void,
    handlePointerClick?: (eventData: Vector2WithInfo, eventState: EventState) => void,
}

export function EventHoc(EL: React.FC<IEventParams>) {
    return (props: IEventParams) => {
        const instance:Control = (props as any).instance;
        const {handlePointerMove, handlePointerEnter, handlePointerOut, handlePointerDown, handlePointerUp, handlePointerClick} = props;
        useEffect(() => {
            isAllPresent(instance, handlePointerMove) && (instance.onPointerMoveObservable.add(handlePointerMove));
        }, [instance, handlePointerMove]);

        useEffect(() => {
            isAllPresent(instance, handlePointerEnter) && (instance.onPointerEnterObservable.add(handlePointerEnter));
        }, [instance, handlePointerEnter]);

        useEffect(() => {
            isAllPresent(instance, handlePointerOut) && (instance.onPointerOutObservable.add(handlePointerOut));
        }, [instance, handlePointerOut]);

        useEffect(() => {
            isAllPresent(instance, handlePointerDown) && (instance.onPointerDownObservable.add(handlePointerDown));
        }, [instance, handlePointerDown]);

        useEffect(() => {
            isAllPresent(instance, handlePointerUp) && (instance.onPointerUpObservable.add(handlePointerUp));
        }, [instance, handlePointerUp]);

        useEffect(() => {
            isAllPresent(instance, handlePointerClick) && (instance.onPointerClickObservable.add(handlePointerClick));
        }, [instance, handlePointerClick]);
        return <EL {...props}/>;
    }
}
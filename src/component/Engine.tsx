import { Engine as BabylonjsEngine, Engine, EngineOptions } from "@babylonjs/core";
import  React, { ReactNode, useEffect, useRef, useState } from "react";

type IEngineInitial = {
    antialias?: boolean,
    options?: EngineOptions,
    adaptToDeviceRatio?: boolean,
    width?: number,
    height?: number,
    children?: ReactNode
}

export type IEngineContextOptions = {
    engine?: BabylonjsEngine
};
export const EngineContext = React.createContext<IEngineContextOptions>({engine: undefined});

export const P2PEngine = (props: IEngineInitial) => {
    const { antialias, options, adaptToDeviceRatio } = props;
    const canvasRef = useRef(null);
    const [instance, setInstance] = useState<BabylonjsEngine>();

    useEffect(() => {
        let obj = new BabylonjsEngine(canvasRef.current, antialias, options, adaptToDeviceRatio );
        setInstance(obj);

        const onResizeWindow = () => {
            obj.resize();
        }

        window.addEventListener('resize', onResizeWindow);
        return () => {
            canvasRef.current = null;
            window.removeEventListener('resize', onResizeWindow);
        }
    }, []);


    return <EngineContext.Provider value={{engine: instance}}>
            <canvas id="Game" ref={canvasRef} width={props.width} height={props.height}>
                {instance !== undefined && props.children}
            </canvas>
        </EngineContext.Provider>
};


import { Engine as BabylonEngine, EngineOptions } from "@babylonjs/core";
import  React, { ReactNode, useEffect, useRef, useState } from "react";

type IEngineInitial = {
    antialias?: boolean,
    options?: EngineOptions,
    adaptToDeviceRatio?: boolean,
    width?: number,
    height?: number,
    children?: ReactNode
}

type IEngineContextOptions = {
    engine?: BabylonEngine,
    canvas?: HTMLCanvasElement,
    resourceManager?: any;
};
export const EngineContext = React.createContext<IEngineContextOptions>({});

export const P2PEngine = (props: IEngineInitial) => {
    const { antialias, options, adaptToDeviceRatio } = props;

    const canvasRef = useRef(null);

    const [instance, setInstance] = useState<BabylonEngine>();

    useEffect(() => {
        let obj = new BabylonEngine(canvasRef.current, antialias, options, adaptToDeviceRatio );
        setInstance(obj);

        obj.runRenderLoop(() => {
            for (let scene of obj.scenes) {
                scene.cameras.length > 0 && scene.render();
            }
        })

        const onResizeWindow = () => {
            obj.resize();
        }
        window.addEventListener('resize', onResizeWindow);
        
        return () => {
            canvasRef.current = null;
            window.removeEventListener('resize', onResizeWindow);
        }
    }, []);


    return <EngineContext.Provider value={{engine: instance, canvas: canvasRef.current!}}>
            <canvas id="Game" ref={canvasRef} width={props.width} height={props.height}>
                {instance !== undefined && props.children}
            </canvas>
        </EngineContext.Provider>
};


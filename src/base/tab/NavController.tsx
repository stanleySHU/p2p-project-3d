import { Scene as BabylonScene } from "@babylonjs/core";
import React, { ReactElement, useContext, useEffect, useReducer, useRef, useState } from "react"
import { EngineContext } from "../Engine";
import { ISceneProps } from '../scene/Scene';
import { Action, initialState, push, reducer } from './NavRedux';

type INavControllerOptions = {
    enter: string,
    children: ReactElement<ISceneProps> | ReactElement<ISceneProps>[]
}

type INavControllerContextOptions = {
    navDispath: React.Dispatch<Action>
}

export const NavControllerContext = React.createContext<INavControllerContextOptions>({} as any);

export const NavController = (props: INavControllerOptions) => {
    const { engine } = useContext(EngineContext);
    const [ state, dispath ] = useReducer(reducer, initialState);

    useEffect(() => {
        const enterId = props.enter || 'preload';
        dispath(push(enterId));

        engine!.runRenderLoop(() => {
            // if (engine?.scenes.length) console.log(engine?.scenes)
        });

        return () => {

        };
    }, []);

    const children = React.Children.toArray(props.children);
    return <NavControllerContext.Provider value={{navDispath: dispath}}>
        {
            state.sceneIds.map(id => {
                return children.filter((child: any) => {
                    return child.props.id == id;
                })
            })
        }
    </NavControllerContext.Provider>
}
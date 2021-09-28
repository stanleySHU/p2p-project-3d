import { Mesh, MeshBuilder } from "@babylonjs/core";
import React, { Component, ReactNode, useContext, useEffect, useRef } from "react";
import { IMeshInitial, MeshHOC } from "./Mesh";
import { SceneContext } from "../Scene";

export type IGroupInitial = {
    width: number,
    height: number,
    subdivisions?: number
} & IMeshInitial;


const Ground = (props: IGroupInitial) => {
    

    useEffect(() => {
        
    });
    return null;
};

export const P2PGround = MeshHOC<IGroupInitial>(Ground);
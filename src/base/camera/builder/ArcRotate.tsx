import React, { useEffect } from "react";
import { isAllPresent } from "../../../utils/lang";

export type IArcRotateParmas = {
    alpha?: number, 
    beta?: number, 
    radius?: number
};

export function ArcRotateHoc(EL: React.FC<IArcRotateParmas>) {
    return (props: IArcRotateParmas) => {
        const { alpha, beta, radius } = props
        const insatnce = (props as any).instance;

        useEffect(() => {
            isAllPresent(insatnce, alpha) && (insatnce.alpha = alpha);
        }, [insatnce, alpha]);

        useEffect(() => {
            isAllPresent(insatnce, beta) && (insatnce.beta = beta);
        }, [insatnce, beta]);

        useEffect(() => {
            isAllPresent(insatnce, radius) && (insatnce.radius = radius);
        }, [insatnce, radius]);

        return <EL {...props}/>;
    }
}
import { buildExtends as _buildExtends } from '../node/Node';
import { useEffect } from "react"

export type ILightProps = {}

export type ILightParams = {}

function LightHOC(EL: React.FC) {
    return (props: ILightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LightHOC(e));
}
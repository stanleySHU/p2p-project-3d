import { buildExtends as _buildExtends } from '../node/Node';
import { useEffect } from "react"

export type IShadowLightProps = {}

export type IShadowLightParams = {}

function ShadowLightHOC(EL: React.FC) {
    return (props: IShadowLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ShadowLightHOC(e));
}
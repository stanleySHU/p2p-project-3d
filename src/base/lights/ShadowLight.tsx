import { buildExtends as _buildExtends } from '../node/Node';
import { useEffect } from "react"

export type IShadowLightProps = {}

export type IShadowLightParams = {}

function ShadowLightHOC<T>(EL: React.FC<T>) {
    return (props: T & IShadowLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ShadowLightHOC(e));
}
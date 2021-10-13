import { useEffect } from "react"

export type IShadowLightProps = {}

export type IShadowLightParams = {}

export function ShadowLightHOC(EL: React.FC) {
    return (props: IShadowLightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}
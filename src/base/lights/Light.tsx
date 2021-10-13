import { useEffect } from "react"

export type ILightProps = {}

export type ILightParams = {}

export function LightHOC(EL: React.FC) {
    return (props: ILightParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

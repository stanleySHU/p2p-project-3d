import { useEffect } from "react"

export type IAbstractMeshProps = {}

export type IAbstractMeshParams = {}

export function AbstractMeshHOC(EL: React.FC) {
    return (props: IAbstractMeshParams) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

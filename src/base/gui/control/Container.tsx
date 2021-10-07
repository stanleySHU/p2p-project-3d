import { Container as BabylonContainer} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type IContainerProps = {
    name?: string | undefined
}

export type IContainerParams = {

}

function ContainerHOC<T>(EL: React.FC<T>) {
    return (props: T & IContainerParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ContainerHOC(e));
}

function _(props: IContainerProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonContainer(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PContainer = buildExtends<IContainerProps & IContainerParams>(_); 
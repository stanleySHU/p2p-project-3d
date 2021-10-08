import { Container as BabylonContainer} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type IContainerProps = IComponentProps<BabylonContainer> & {
    name?: string 
}

export type IContainerParams = {

}

function ContainerHOC(EL: React.FC) {
    return (props: IContainerParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ContainerHOC(e));
}

function _(props: IContainerProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonContainer(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PContainer = buildExtends<IContainerProps & IContainerParams>(_); 
import { Container as BabylonContainer, Control as BabylonControl} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { Nullable } from '../../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type IContainerProps = IComponentProps & {
    name?: string 
}

export type IContainerParams = {
}

export function ContainerHOC(EL: React.FC) {
    return (props: IContainerParams) => { 
        return <EL {...props}/>
    }
}

function _(props: IContainerProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonContainer(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PContainer = getEL<IControlParams & IContainerParams & IContainerProps>(_, [
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])
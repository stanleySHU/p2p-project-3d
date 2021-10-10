import { Container as BabylonContainer, Control as BabylonControl} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { Nullable } from '../../../utils/customType';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type IContainerProps = IComponentProps<BabylonContainer> & {
    name?: string 
}

export type IContainerParams = IControlParams & {
}

function ContainerHOC(EL: React.FC) {
    return (props: IContainerParams) => { 
        const { instance } = props;
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ContainerHOC(e));
}

function _(props: IContainerProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonContainer(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PContainer = buildExtends<IContainerProps & IContainerParams>(_); 
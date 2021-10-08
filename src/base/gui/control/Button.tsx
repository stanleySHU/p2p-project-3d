import { Button as BabylonButton} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Rectangle'

export type IButtonProps = IComponentProps<BabylonButton> & {
    name?: string 
}

export type IButtonParams = {

}

function ButtonHOC(EL: React.FC) {
    return (props: IButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ButtonHOC(e));
}

function _(props: IButtonProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonButton(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PButton = buildExtends<IButtonProps & IButtonParams>(_); 
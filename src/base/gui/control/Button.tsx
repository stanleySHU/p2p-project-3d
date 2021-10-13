import { Button as BabylonButton} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IRectangleParams } from './Rectangle'

export type IButtonProps = IComponentProps<BabylonButton> & {
    name?: string 
}

export type IButtonParams<T> = IRectangleParams<T> & {

}

function ButtonHOC(EL: React.FC) {
    return (props: IButtonParams<BabylonButton>) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ButtonHOC(e));
}

function _(props: IButtonProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonButton(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PButton = buildExtends<IButtonProps & IButtonParams<BabylonButton>>(_); 
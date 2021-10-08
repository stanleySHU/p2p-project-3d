import { ToggleButton as BabylonToggleButton} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Rectangle'

export type IToggleButtonProps = IComponentProps<BabylonToggleButton> &  {
    name?: string 
}

export type IToggleButtonParams = {

}

function ToggleButtonHOC(EL: React.FC) {
    return (props: IToggleButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ToggleButtonHOC(e));
}

function _(props: IToggleButtonProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonToggleButton(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PToggleButton = buildExtends<IToggleButtonProps & IToggleButtonParams>(_); 
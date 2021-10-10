import { ToggleButton as BabylonToggleButton} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IRectangleParams } from './Rectangle'

export type IToggleButtonProps = IComponentProps<BabylonToggleButton> &  {
    name?: string 
}

export type IToggleButtonParams = IRectangleParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonToggleButton(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PToggleButton = buildExtends<IToggleButtonProps & IToggleButtonParams>(_); 
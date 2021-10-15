import { Button as BabylonButton} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ContainerHOC, IContainerParams } from './Container';
import { ControlHOC, IControlParams } from './Control';
import { IRectangleParams, RectangleHOC } from './Rectangle'

type ButtonType = 'ImageButton' | 'ImageOnlyButton' | 'SimpleButton' | 'ImageWithCenterTextButton';

export type IButtonProps = IComponentProps & {
    type?: ButtonType,
    name?: string,
    image?: string
    text?: string
}

export type IButtonParams = {

}

export function ButtonHOC(EL: React.FC<IButtonParams>) {
    return (props: IButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IButtonProps & IButtonParams) {
    const { init, name, type, image, text } = props;
    useLayoutEffect(() => {
        let obj: BabylonButton;
        switch(type) {
            case 'ImageButton': obj = BabylonButton.CreateImageButton(name, text, image); break;
            case 'ImageOnlyButton': obj = BabylonButton.CreateImageOnlyButton(name, image); break;
            case 'SimpleButton': obj = BabylonButton.CreateSimpleButton(name, text); break;
            case 'ImageWithCenterTextButton': obj = BabylonButton.CreateImageWithCenterTextButton(name, text, image); break;
            default: obj = new BabylonButton(name);
        }
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PButton = getEL<IControlParams & IContainerParams & IRectangleParams & IButtonParams & IButtonProps>(_, [
    ButtonHOC,
    RectangleHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])
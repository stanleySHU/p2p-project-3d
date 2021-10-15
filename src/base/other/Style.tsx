import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { Style as BabylonStyle } from '@babylonjs/gui';
import { useContext, useEffect, useLayoutEffect } from 'react';
import { AdvancedDynamicTextureContext } from '../gui/AdvancedDynamicTexture';

export type IStyleProps = IComponentProps &  {}

export type IStyleParams = {
    fontFamily?: string,
    fontSize?: string | number,
    fontStyle?: string,
    fontWeight?: string
}

function StyleHOC(EL: React.FC<IStyleParams>) {
    return (props: IStyleParams) => {
        const instance: BabylonStyle = (props as any).instance
        useEffect(() => {
            if (instance && props.fontFamily) instance.fontFamily = props.fontFamily;
        }, [props.fontFamily, instance]);  
        useEffect(() => {
            if (instance && props.fontSize) instance.fontSize = props.fontSize;
        }, [props.fontSize, instance]);  
        useEffect(() => {
            if (instance && props.fontStyle) instance.fontStyle = props.fontStyle;
        }, [props.fontStyle, instance]);  
        useEffect(() => {
            if (instance && props.fontWeight) instance.fontWeight = props.fontWeight;
        }, [props.fontWeight, instance]);  
        return <EL {...props}/>
    }
}

function _(props: IStyleProps) {
    const { init, parentInstance } = props;
    const { ADTexture } = useContext(AdvancedDynamicTextureContext);
    useLayoutEffect(() => {
        let obj = new BabylonStyle(ADTexture);
        parentInstance.style = obj;
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStyle = getEL<IStyleParams & IStyleProps>(_, [
    StyleHOC,
    ComponentHOC
]);
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { AdvancedDynamicTexture, Style as BabylonStyle } from '@babylonjs/gui';
import { Component, useLayoutEffect } from 'react';

export type IStyleProps = IComponentProps&  {
    host: AdvancedDynamicTexture
}

export type IStyleParams = {
    fontFamily?: string,
    fontSize?: string | number,
    fontStyle?: string,
    fontWeight?: string
}

function StyleHOC(EL: React.FC<IStyleParams>) {
    return (props: IStyleParams) => {
        // useEffect(() => {

        // });  
        return <EL {...props}/>
    }
}

function _(props: IStyleProps) {
    const { init, host } = props;
    useLayoutEffect(() => {
        let obj = new BabylonStyle(host);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStyle = getEL<IStyleParams>(_, [
    StyleHOC,
    ComponentHOC
]);
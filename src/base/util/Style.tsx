import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../Component';
import { AdvancedDynamicTexture, Style as BabylonStyle } from '@babylonjs/gui';
import { Component, useLayoutEffect } from 'react';

export type IStyleProps = IComponentProps<BabylonStyle> &  {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StyleHOC(e));
}

function _(props: IStyleProps) {
    const { init, host } = props;
    useLayoutEffect(() => {
        let obj = new BabylonStyle(host);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStyle = buildExtends<IStyleProps & IStyleParams>(_); 
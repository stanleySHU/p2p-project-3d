import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../Component'

export type IThinTextureProps = {}

export type IThinTextureParams = {}

function ThinTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IThinTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ThinTextureHOC(e));
}


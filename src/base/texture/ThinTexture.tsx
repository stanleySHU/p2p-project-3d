import React, { useEffect } from 'react';

export type IThinTextureProps = {}

export type IThinTextureParams = {
}

export function ThinTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IThinTextureParams) => {
        useEffect(() => {
            
        });
        return <EL {...props}/>
    }
}

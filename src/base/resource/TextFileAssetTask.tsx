import { TextFileAssetTask as BabylonTextFileAssetTask } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IAbstractAssetTaskProps, buildExtends as _buildExtends } from './AbstractAssetTask';

export type ITextFileAssetTaskInitial<T> = IAbstractAssetTaskProps<T> & {
    name: string,
    url: string
};
export type ITextFileAssetTaskProps = ITextFileAssetTaskInitial<BabylonTextFileAssetTask>;

function TextFileAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & ITextFileAssetTaskProps) => {
        const { name, instance, url } = props;

        useEffect(() => {
            if (instance && !instance!.current) {
                instance!.current = new BabylonTextFileAssetTask(name, url);
            }
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TextFileAssetTaskHOC(e));
}

export const P2PTextFileAssetTask = buildExtends<ITextFileAssetTaskProps>(null);
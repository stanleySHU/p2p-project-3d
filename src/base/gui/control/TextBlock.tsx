import { TextBlock as BabylonTextBlock } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IControlInitial, buildExtends as _buildExtends } from './Control';

export type ITextBlockInitial<T> = IControlInitial<T> & {
    text?: string
}
export type ITextBlockProps = ITextBlockInitial<BabylonTextBlock>;

export function TextBlockHOC<T>(EL: React.FC<T>) {
    return (props: T & ITextBlockProps) => {
        const { instance, name, text} = props;
        useEffect(() => {
            console.log(`TextBlock ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonTextBlock(name, text);
                console.log(`TextBlock ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(TextBlockHOC(e));
}

export const P2PTextBlock = buildExtends(ChildHOC(null));
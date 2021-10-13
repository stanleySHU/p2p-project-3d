import { P2PAdvancedDynamicTexture, P2PImage, P2PTextBlock } from '../base';
import { IPreloadSceneProps, IPreviewProps, P2PPreloadPage } from '../base/scene/PreloadScene';

const PreView = (props: IPreviewProps) => {
    return <P2PAdvancedDynamicTexture scene={null} background="black" {...props} name="preView">
        <P2PImage url="/assets/img/main_bg.jpg" />
        <P2PTextBlock text={`${props.process! * 100}%`} color="white" />
    </P2PAdvancedDynamicTexture>
}

export const StartUpPage = (props: IPreloadSceneProps) => {
    let preView = <PreView></PreView>;

    return <P2PPreloadPage {...props} Preview={preView}>
        <taskTexture taskName="@atlas/bg" url="/assets/img/bg@1x.png"/>
        <taskTextFile taskName="@json/bg" url="/assets/img/bg@1x.json"/>

        <taskTexture taskName="@atlas/components-bg" url="/assets/img/component@1x.png" />
        <taskTextFile taskName="@atlas/components-bg" url="/assets/img/component@1x.json" />
    </P2PPreloadPage>
}
import { P2PAdvancedDynamicTexture, P2PTextBlock } from '../base';
import { IPreloadSceneProps, IPreviewProps, P2PPreloadPage } from '../base/scene/PreloadScene';


const PreView = (props: IPreviewProps) => {
    return <P2PAdvancedDynamicTexture scene={null} background="black" {...props} name="preView">
        <P2PTextBlock text={`${props.process! * 100}%`} color="white" />
    </P2PAdvancedDynamicTexture>
}

export const PreloadPage = (props: IPreloadSceneProps) => {
    let preView = <PreView></PreView>;

    return <P2PPreloadPage {...props} Preview={preView}>
        <taskTexture taskName="@atlas/plazaBg" url="/assets/img/plazaBg.png"/>
    </P2PPreloadPage>
}
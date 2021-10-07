import { P2PAdvancedDynamicTexture, P2PTextBlock } from '../base';
import { IPreloadSceneProps, IPreviewProps, P2PPreloadPage } from '../base/scene/PreloadScene';


const PreView = (props: IPreviewProps) => {
    return <P2PAdvancedDynamicTexture scene={null} {...props} name="preView">
        <P2PTextBlock text="1111"/>
    </P2PAdvancedDynamicTexture>
}

export const PreloadPage = (props: IPreloadSceneProps) => {
    let preView = <PreView></PreView>;

    return <P2PPreloadPage {...props} Preview={preView}>
        <taskImg taskName="main-bg" url="/assets/img/main_bg@1x.jpg" /> 
    </P2PPreloadPage>
}


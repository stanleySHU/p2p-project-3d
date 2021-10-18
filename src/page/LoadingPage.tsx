import { P2PAdvancedDynamicTexture, P2PImage, P2PTextBlock } from '../base';
import { IPreloadSceneProps, IPreviewProps, P2PPreloadPage } from '../base/scene/PreloadScene';

const PreView = (props: IPreviewProps) => {
    return <P2PAdvancedDynamicTexture scene={null} background="black" {...props} name="preView">
        <P2PImage url="/assets/img/main_bg.jpg" />
        <P2PTextBlock text={`${props.process! * 100}%`} color="white" />
    </P2PAdvancedDynamicTexture>
}

const LoadingHoc = (props: IPreloadSceneProps) => {
    let preView = <PreView></PreView>;

    return <P2PPreloadPage {...props} Preview={preView}>
        {props.children}
    </P2PPreloadPage>
}

export const StartUpPage = (props: IPreloadSceneProps) => {
    return <LoadingHoc {...props}>
        <taskTexture taskName="@atlas/bg" url="/assets/texture/bg.png" />
        <taskTextFile taskName="@json/bg" url="/assets/texture/bg.json" />

        <taskTexture taskName="@atlas/components-bg" url="/assets/texture/component.png" />
        <taskTextFile taskName="@json/components-bg" url="/assets/texture/component.json" />
    </LoadingHoc>
}

export const LoadGamePage = (props: IPreloadSceneProps) => {
    return <LoadingHoc {...props}>
        <taskMesh taskName="@gltf/cheqiyu" url="/assets/gltf/cheqiyu.gltf" meshName="cheqiyu" sceneFileName=""/>
        <taskMesh taskName="@gltf/denglongyu" url="/assets/gltf/denglongyu.gltf" meshName="denglongyu" sceneFileName=""/>
        <taskMesh taskName="@gltf/dianmanyu" url="/assets/gltf/dianmanyu.gltf" meshName="dianmanyu" sceneFileName=""/>
        <taskMesh taskName="@gltf/dinianyu" url="/assets/gltf/dinianyu.gltf" meshName="dinianyu" sceneFileName=""/>
        <taskMesh taskName="@gltf/fangyu" url="/assets/gltf/fangyu.gltf" meshName="fangyu" sceneFileName=""/>
        <taskMesh taskName="@gltf/haigui" url="/assets/gltf/haigui.gltf" meshName="haigui" sceneFileName=""/>
        <taskMesh taskName="@gltf/hetun" url="/assets/gltf/hetun.gltf" meshName="hetun" sceneFileName=""/>
        <taskMesh taskName="@gltf/jianyu" url="/assets/gltf/jianyu.gltf" meshName="jianyu" sceneFileName=""/>
        <taskMesh taskName="@gltf/jinqianyu" url="/assets/gltf/jinqianyu.gltf" meshName="jinqianyu" sceneFileName=""/>
        <taskMesh taskName="@gltf/shayu" url="/assets/gltf/shayu.gltf" meshName="shayu" sceneFileName=""/>
        <taskMesh taskName="@gltf/shiziyu" url="/assets/gltf/shiziyu.gltf" meshName="shiziyu" sceneFileName=""/>
        <taskMesh taskName="@gltf/tianshiyu" url="/assets/gltf/tianshiyu.gltf" meshName="tianshiyu" sceneFileName=""/>
        <taskMesh taskName="@gltf/xiaohuangyu" url="/assets/gltf/xiaohuangyu.gltf" meshName="xiaohuangyu" sceneFileName=""/>
        <taskMesh taskName="@gltf/xiaolvyu" url="/assets/gltf/xiaolvyu.gltf" meshName="xiaolvyu" sceneFileName=""/>
    </LoadingHoc>
}
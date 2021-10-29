import { Scene } from '@babylonjs/core';
import { P2PMesh, P2PStandardMaterial, P2PTexture, P2PVertexData } from '../base';
import { IPreloadSceneProps, IPreviewProps, P2PPreloadPage } from '../base/scene/PreloadScene';
import { FullBackgroundVertexData } from '../components/FullBackground';

const PreView = (props: IPreviewProps) => {
    // return <P2PAdvancedDynamicTexture scene={null} background="black" {...props} name="preView">
    //     <P2PImage url="/assets/img/main_bg.jpg" />
    //     <P2PTextBlock text={`${props.process! * 100}%`} color="white" />
    // </P2PAdvancedDynamicTexture>
    const {scene} = props;
    return <>
        {getMaterial(scene)}
        <P2PMesh name="customBg" scene={scene} >
                {FullBackgroundVertexData()}
        </P2PMesh>
    </>
}

const LoadingHoc = (props: IPreloadSceneProps) => {
    let preView = <PreView></PreView>;

    return <P2PPreloadPage {...props} Preview={preView}>
        {props.children}
    </P2PPreloadPage>
}

export const StartUpPage = (props: IPreloadSceneProps) => {
    return <LoadingHoc {...props}>
        <taskTexture taskName="@atlas/lobby" url="/assets/img/lobby.png"/>

        <taskTexture taskName="@atlas/sky0" url="/assets/skybox/TropicalSunnyDay_nx.jpg"/>
        <taskTexture taskName="@atlas/sky1" url="/assets/skybox/TropicalSunnyDay_ny.jpg"/>
        <taskTexture taskName="@atlas/sky2" url="/assets/skybox/TropicalSunnyDay_nz.jpg"/>
        <taskTexture taskName="@atlas/sky3" url="/assets/skybox/TropicalSunnyDay_px.jpg"/>
        <taskTexture taskName="@atlas/sky4" url="/assets/skybox/TropicalSunnyDay_py.jpg"/>
        <taskTexture taskName="@atlas/sky5" url="/assets/skybox/TropicalSunnyDay_pz.jpg"/>

        <taskMesh taskName="@gltf/cheqiyu" meshName="" url="/assets/gltf/" sceneFileName="shark_simple_anim_v02.gltf"/>
    </LoadingHoc>
}

export const LoadGamePage = (props: IPreloadSceneProps) => {
    return <LoadingHoc {...props}>
        <taskMesh taskName="@gltf/cheqiyu" meshName="" url="/assets/gltf/" sceneFileName="cheqiyu.gltf"/>
        <taskMesh taskName="@gltf/denglongyu" meshName="" url="/assets/gltf/" sceneFileName="denglongyu.gltf"/>
        <taskMesh taskName="@gltf/dianmanyu" meshName="" url="/assets/gltf/" sceneFileName="dianmanyu.gltf"/>
        <taskMesh taskName="@gltf/dinianyu" meshName="" url="/assets/gltf/" sceneFileName="dinianyu.gltf"/>
        <taskMesh taskName="@gltf/fangyu" meshName="" url="/assets/gltf/" sceneFileName="fangyu.gltf"/>
        <taskMesh taskName="@gltf/haigui" meshName="" url="/assets/gltf/" sceneFileName="haigui.gltf"/>
        <taskMesh taskName="@gltf/hetun" meshName="" url="/assets/gltf/" sceneFileName="hetun.gltf"/>
        <taskMesh taskName="@gltf/jianyu" meshName="" url="/assets/gltf/" sceneFileName="jianyu.gltf"/>
        <taskMesh taskName="@gltf/jinqianyu" meshName="" url="/assets/gltf/" sceneFileName="jinqianyu.gltf"/>
        <taskMesh taskName="@gltf/shayu" meshName="" url="/assets/gltf/" sceneFileName="shayu.gltf"/>
        <taskMesh taskName="@gltf/tianshiyu" meshName="" url="/assets/gltf/" sceneFileName="tianshiyu.gltf"/>
        <taskMesh taskName="@gltf/xiaohuangyu" meshName="" url="/assets/gltf/" sceneFileName="xiaohuangyu.gltf"/>
        <taskMesh taskName="@gltf/xiaolvyu" meshName="" url="/assets/gltf/" sceneFileName="xiaolvyu.gltf"/>
    </LoadingHoc>
}

function getMaterial(scene: Scene) {
    return <>
        <P2PStandardMaterial name="" scene={scene} assignToMeshByName={['customBg']}>
            <P2PTexture url="/assets/img/plazaBg.png" sceneOrEngine={scene} />
        </P2PStandardMaterial>
    </>
}
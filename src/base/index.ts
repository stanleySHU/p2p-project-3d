//scene
import { P2PScene } from './scene/Scene';

//node
import { P2PNode } from './node/Node';
import { P2PTransformNode } from './node/TransformNode';

//cameras
import { P2PAnaglyphArcRotateCamera } from './camera/AnaglyphArcRotateCamera';
import { P2PAnaglyphFreeCamera } from './camera/AnaglyphFreeCamera';
import { P2PArcRotateCamera } from './camera/ArcRotateCamera'; 
import { P2PCamera } from './camera/Camera';
import { P2PDeviceOrientationCamera } from './camera/DeviceOrientationCamera';
import { P2PFollowCamera } from './camera/FollowCamera';
import { P2PFreeCamera } from './camera/FreeCamera';
import { P2PStereoscopicArcRotateCamera } from './camera/StereoscopicArcRotateCamera';
import { P2PStereoscopicFreeCamera } from './camera/StereoscopicFreeCamera';
import { P2PTargetCamera } from './camera/TargetCamera';
import { P2PTouchCamera } from './camera/TouchCamera';
import { P2PUniversalCamera } from './camera/UniversalCamera';
import { P2PVirtualJoysticksCamera } from './camera/VirtualJoysticksCamera';
import { P2PVRDeviceOrientationArcRotateCamera } from './camera/VRDeviceOrientationArcRotateCamera';
import { P2PWebVRFreeCamera } from './camera/WebVRFreeCamera';
import { P2PWebXRCamera } from './camera/WebXRCamera';

//lights
import { P2PDirectionalLight } from './lights/DirectionalLight';
import { P2PHemisphericLight } from './lights/HemisphericLight';
import { P2PPointLight } from './lights/PointLight';
import { P2PSpotLight } from './lights/SpotLight';

//mesh
import { P2PBox } from './mesh/Box';
import { P2PCapsule } from './mesh/Capsule';
import { P2PCylinder } from './mesh/Cylinder';
import { P2PDashedLines } from './mesh/DashedLines';
import { P2PDisc } from './mesh/Disc';
import { P2PGround } from './mesh/Ground';
import { P2PLines } from './mesh/Lines';
import { P2PLineSystem } from './mesh/LineSystem';
import { P2PMesh } from './mesh/Mesh';
import { P2PPlane } from './mesh/Plane';
import { P2PSphere } from './mesh/Sphere';
import { P2PTiledBox } from './mesh/TiledBox';
import { P2PTiledGround } from './mesh/TiledGround';
import { P2PTiledPlane } from './mesh/TiledPlane';
import { P2PTorus } from './mesh/Torus';

//material
import { P2PBackgroundMaterial } from './material/BackgroundMaterial';
import { P2PMaterial } from './material/Material';
import { P2PMultiMaterial } from './material/MultiMaterial';
import { P2PNodeMaterial } from './material/NodeMaterial';
import { P2PPBRMetallicRoughnessMaterial } from './material/PBRMetallicRoughnessMaterial';
import { P2PPBRSpecularGlossinessMaterial } from './material/PBRSpecularGlossinessMaterial';
import { P2PPushMaterial } from './material/PushMaterial';
import { P2PShaderMaterial } from './material/ShaderMaterial';
import { P2PStandardMaterial } from './material/StandardMaterial';

//behavior
import { P2PAttachToBoxBehavior } from './events/behaviors/AttachToBoxBehavior';
import { P2PAutoRotationBehavior } from './events/behaviors/AutoRotationBehavior';
import { P2PBouncingBehavior } from './events/behaviors/BouncingBehavior';
import { P2PFadeInOutBehavior } from './events/behaviors/FadeInOutBehavior';
import { P2PMultiPointerScaleBehavior } from './events/behaviors/MultiPointerScaleBehavior';
import { P2PPointerDragBehavior } from './events/behaviors/PointerDragBehavior';
import { P2PSixDofDragBehavior } from './events/behaviors/SixDofDragBehavior';

//action
import { P2PAction } from './events/actions/Action';
import { P2PCombineAction } from './events/actions/CombineAction';
import { P2PDoNothingAction } from './events/actions/DoNothingAction';
import { P2PExecuteCodeAction } from './events/actions/ExecuteCodeAction';
import { P2PIncrementValueAction } from './events/actions/IncrementValueAction';
import { P2PInterpolateValueAction } from './events/actions/InterpolateValueAction';
import { P2PPlayAnimationAction } from './events/actions/PlayAnimationAction';
import { P2PPlaySoundAction } from './events/actions/PlaySoundAction';
import { P2PSetParentAction } from './events/actions/SetParentAction';
import { P2PSetStateAction } from './events/actions/SetStateAction';
import { P2PSetValueAction } from './events/actions/SetValueAction';
import { P2PStopAnimationAction } from './events/actions/StopAnimationAction';
import { P2PStopSoundAction } from './events/actions/StopSoundAction';
import { P2PSwitchBooleanAction } from './events/actions/SwitchBooleanAction';

//Condition
import { P2PCondition } from './events/condition/Condition';
import { P2PPredicateCondition } from './events/condition/PredicateCondition';
import { P2PStateCondition } from './events/condition/StateCondition';
import { P2PValueCondition } from './events/condition/ValueCondition';

//texture
import { P2PBaseTexture } from './texture/BaseTexture';
import { P2PColorGradingTexture } from './texture/ColorGradingTexture'; 
import { P2PCubeTexture } from './texture/CubeTexture';
import { P2PCustomProceduralTexture } from './texture/CustomProceduralTexture';
import { P2PDynamicTexture } from './texture/DynamicTexture';
import { P2PEquiRectangularCubeTexture } from './texture/EquiRectangularCubeTexture';
import { P2PHDRCubeTexture } from './texture/HDRCubeTexture';
import { P2PHtmlElementTexture } from './texture/HtmlElementTexture';
import { P2PMirrorTexture } from './texture/MirrorTexture'; 
import { P2PMultiRenderTarget } from './texture/MultiRenderTarget';
import { P2PNoiseProceduralTexture } from './texture/NoiseProceduralTexture';
import { P2PProceduralTexture } from './texture/ProceduralTexture';
import { P2PRawTexture } from './texture/RawTexture';
import { P2PRawTexture2DArray } from './texture/RawTexture2DArray';
import { P2PRawTexture3D } from './texture/RawTexture3D';
import { P2PRefractionTexture } from './texture/RefractionTexture';
import { P2PRenderTargetTexture } from './texture/RenderTargetTexture';
import { P2PTexture } from './texture/Texture';
import { P2PVideoTexture } from './texture/VideoTexture';

//resource
import { P2PAssetsManager } from './resource2/AssetsManager';
//gui
//control
import { P2PBaseSlider } from './gui/control/BaseSlider';
import { P2PButton } from './gui/control/Button';
import { P2PCheckbox } from './gui/control/Checkbox';
import { P2PColorPicker } from './gui/control/ColorPicker';
import { P2PContainer } from './gui/control/Container';
import { P2PControl } from './gui/control/Control';
import { P2PDisplayGrid } from './gui/control/DisplayGrid';
import { P2PEllipse } from './gui/control/Ellipse';
import { P2PFocusableButton } from './gui/control/FocusableButton';
import { P2PGrid } from './gui/control/Grid';
import { P2PImage } from './gui/control/Image';
import { P2PImageBasedSlider } from './gui/control/ImageBasedSlider';
import { P2PImageScrollBar } from './gui/control/ImageScrollBar';
import { P2PInputPassword } from './gui/control/InputPassword';
import { P2PInputText } from './gui/control/InputText';
import { P2PLine } from './gui/control/Line';
import { P2PMultiLine } from './gui/control/MultiLine';
import { P2PRadioButton } from './gui/control/RadioButton';
import { P2PRectangle } from './gui/control/Rectangle';
import { P2PScrollBar } from './gui/control/ScrollBar';
import { P2PScrollViewer } from './gui/control/ScrollViewer';
import { P2PSelectionPanel } from './gui/control/SelectionPanel';
import { P2PSlider } from './gui/control/Slider';
import { P2PStackPanel } from './gui/control/StackPanel';
import { P2PTextBlock } from './gui/control/TextBlock';
import { P2PToggleButton } from './gui/control/ToggleButton';
import { P2PVirtualKeyboard } from './gui/control/VirtualKeyboard';

import { P2PAdvancedDynamicTexture } from './gui/AdvancedDynamicTexture';

//gizmo
import { P2PAxisDragGizmo } from './gizmo/AxisDragGizmo';
import { P2PAxisScaleGizmo } from './gizmo/AxisScaleGizmo';
import { P2PBoundingBoxGizmo } from './gizmo/BoundingBoxGizmo';
import { P2PCameraGizmo } from './gizmo/CameraGizmo';
import { P2PGizmo } from './gizmo/Gizmo';
import { P2PLightGizmo } from './gizmo/LightGizmo'; 
import { P2PPlaneDragGizmo } from './gizmo/PlaneDragGizmo';
import { P2PPlaneRotationGizmo } from './gizmo/PlaneRotationGizmo';
import { P2PPositionGizmo } from './gizmo/PositionGizmo';
import { P2PRotationGizmo } from './gizmo/RotationGizmo';
import { P2PScaleGizmo } from './gizmo/ScaleGizmo';

//resource2
import { IBinaryResourceInitial } from './resource2/BinaryFileResource';
import { ICubeTextureResourceInitial } from './resource2/CubeTextureManager';
import { IEquiRectangularCubeTextureResourceInitial } from './resource2/EquiRectangularCubeTextureResource';
import { IHDRCubeTextureResourceInitial } from './resource2/HDRCubeTextureResource';
import { IImageResourceInitial } from './resource2/ImageResource';
import { IMeshResourceInitial } from './resource2/MeshResource';
import { ITextFileResourceInitial } from './resource2/TextFileResource';
import { ITextureResourceInitial } from './resource2/TextureResource';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            taskBinary: IBinaryResourceInitial,
            taskCTexture: ICubeTextureResourceInitial,
            taskERCTexture: IEquiRectangularCubeTextureResourceInitial,
            taskHDRCTexture: IHDRCubeTextureResourceInitial,
            taskImg: IImageResourceInitial,
            taskMesh: IMeshResourceInitial,
            taskTextFile: ITextFileResourceInitial,
            taskTexture: ITextureResourceInitial
        }
    }
}

export {
    //scene
    P2PScene,
    //node
    P2PNode, P2PTransformNode,
    //camera
    P2PAnaglyphArcRotateCamera, P2PAnaglyphFreeCamera, P2PArcRotateCamera, P2PCamera, P2PDeviceOrientationCamera, P2PFollowCamera, P2PFreeCamera, P2PStereoscopicArcRotateCamera, P2PStereoscopicFreeCamera, 
    P2PTargetCamera, P2PTouchCamera, P2PUniversalCamera, P2PVirtualJoysticksCamera, P2PVRDeviceOrientationArcRotateCamera, P2PWebVRFreeCamera, P2PWebXRCamera,
    //
    P2PDirectionalLight, P2PHemisphericLight, P2PPointLight, P2PSpotLight,
    //mesh
    P2PBox, P2PCapsule, P2PCylinder, P2PDashedLines, P2PDisc, P2PGround, P2PLines, P2PLineSystem, P2PMesh, P2PPlane, P2PSphere, P2PTiledBox, P2PTiledGround, P2PTiledPlane, P2PTorus,
    //material
    P2PBackgroundMaterial, P2PMaterial, P2PMultiMaterial, P2PNodeMaterial, P2PPBRMetallicRoughnessMaterial, P2PPBRSpecularGlossinessMaterial, P2PPushMaterial, P2PShaderMaterial, P2PStandardMaterial,
    //behavior
    P2PAttachToBoxBehavior, P2PAutoRotationBehavior, P2PBouncingBehavior, P2PFadeInOutBehavior, P2PMultiPointerScaleBehavior, P2PPointerDragBehavior, P2PSixDofDragBehavior,
    //actions
    P2PAction, P2PCombineAction, P2PDoNothingAction, P2PExecuteCodeAction, P2PIncrementValueAction, P2PInterpolateValueAction, P2PPlayAnimationAction, P2PPlaySoundAction,
    P2PSetParentAction, P2PSetStateAction, P2PSetValueAction, P2PStopAnimationAction, P2PStopSoundAction, P2PSwitchBooleanAction,
    //condition
    P2PCondition, P2PPredicateCondition, P2PStateCondition, P2PValueCondition,
    //texture
    P2PBaseTexture, P2PColorGradingTexture, P2PCubeTexture, P2PCustomProceduralTexture, P2PDynamicTexture, P2PEquiRectangularCubeTexture, P2PHDRCubeTexture, P2PHtmlElementTexture,
    P2PMirrorTexture, P2PMultiRenderTarget, P2PNoiseProceduralTexture, P2PProceduralTexture, P2PRawTexture, P2PRawTexture2DArray, P2PRawTexture3D, P2PRefractionTexture,
    P2PRenderTargetTexture, P2PTexture, P2PVideoTexture,
    //
    P2PAssetsManager,
    //control 2d
    P2PBaseSlider, P2PButton, P2PCheckbox, P2PColorPicker, P2PContainer, P2PControl, P2PDisplayGrid, P2PEllipse, P2PFocusableButton, P2PGrid, P2PImage, P2PImageBasedSlider, P2PImageScrollBar,
    P2PInputPassword, P2PInputText, P2PLine, P2PMultiLine, P2PRadioButton, P2PRectangle, P2PScrollBar, P2PScrollViewer, P2PSelectionPanel, P2PSlider, P2PStackPanel, P2PTextBlock, P2PToggleButton,
    P2PVirtualKeyboard,
    P2PAdvancedDynamicTexture,
    //gizmo
    P2PAxisDragGizmo, P2PAxisScaleGizmo, P2PBoundingBoxGizmo, P2PCameraGizmo, P2PGizmo, P2PLightGizmo, P2PPlaneDragGizmo, P2PPlaneRotationGizmo, P2PPositionGizmo, P2PRotationGizmo, P2PScaleGizmo,
}
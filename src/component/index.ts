//node
import { P2PNode } from './node/Node';
import { P2PTransformNode } from './node/TransformNode';

//cameras
import { P2PArcRotateCamera } from './camera/ArcRotateCamera'; 
import { P2PCamera } from './camera/Camera';
import { P2PDeviceOrientationCamera } from './camera/DeviceOrientationCamera';
import { P2PFollowCamera } from './camera/FollowCamera';
import { P2PFreeCamera } from './camera/FreeCamera';
import { P2PTargetCamera } from './camera/TargetCamera';
import { P2PTouchCamera } from './camera/TouchCamera';
import { P2PUniversalCamera } from './camera/UniversalCamera';

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

//resource
import { IBinaryResourceInitial } from './resource/BinaryFileResource';
import { ICubeTextureResourceInitial } from './resource/CubeTextureManager';
import { IEquiRectangularCubeTextureResourceInitial } from './resource/EquiRectangularCubeTextureResource';
import { IHDRCubeTextureResourceInitial } from './resource/HDRCubeTextureResource';
import { IImageResourceInitial } from './resource/ImageResource';
import { IMeshResourceInitial } from './resource/MeshResource';
import { ITextFileResourceInitial } from './resource/TextFileResource';
import { ITextureResourceInitial } from './resource/TextureResource'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            loadBinary: IBinaryResourceInitial,
            loadCTexture: ICubeTextureResourceInitial,
            loadERCTexture: IEquiRectangularCubeTextureResourceInitial,
            loadHDRCTexture: IHDRCubeTextureResourceInitial,
            loadImg: IImageResourceInitial,
            loadMesh: IMeshResourceInitial,
            loadTextFile: ITextFileResourceInitial,
            loadTexture: ITextureResourceInitial
        }
    }
}

export {
    P2PNode, P2PTransformNode,
    P2PArcRotateCamera, P2PCamera, P2PDeviceOrientationCamera, P2PFollowCamera, P2PFreeCamera, P2PTargetCamera, P2PTouchCamera, P2PUniversalCamera,
    P2PDirectionalLight, P2PHemisphericLight, P2PPointLight, P2PSpotLight,
    P2PBox, P2PCapsule, P2PCylinder, P2PDashedLines, P2PDisc, P2PGround, P2PLines, P2PLineSystem, P2PMesh, P2PPlane, P2PSphere, P2PTiledBox, P2PTiledGround, P2PTiledPlane, P2PTorus
}
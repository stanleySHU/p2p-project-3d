import { IBinaryResourceInitial } from './BinaryFileResource';
import { ICubeTextureResourceInitial } from './CubeTextureManager';
import { IEquiRectangularCubeTextureResourceInitial } from './EquiRectangularCubeTextureResource';
import { IHDRCubeTextureResourceInitial } from './HDRCubeTextureResource';
import { IImageResourceInitial } from './ImageResource';
import { IMeshResourceInitial } from './MeshResource';
import { ITextFileResourceInitial } from './TextFileResource';
import { ITextureResourceInitial } from './TextureResource'

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
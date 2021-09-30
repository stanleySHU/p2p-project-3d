import { PointerDragBehavior as BabylonPointerDragBehavior, Vector3 } from "@babylonjs/core";

export type IPointerDragBehaviorProps = {
    options?: {
        dragAxis?: Vector3;
        dragPlaneNormal?: Vector3;
    }
}

export const P2PPointerDragBehavior = (props: IPointerDragBehaviorProps) => {
    return null;
};
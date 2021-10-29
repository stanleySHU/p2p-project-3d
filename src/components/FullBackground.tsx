import { P2PVertexData } from "../base";

export const FullBackgroundVertexData = () => {
    return <P2PVertexData options={getCustomGround()}/>
}

function getCustomGround() {
    const nearWidth = 0.78, nearHeight = 0.45;
    const farWidth = nearWidth * 1, farHeight = nearHeight * 1;
    return {
        positions: [...[-farWidth, 0, farHeight], ...[farWidth, 0, farHeight], ...[-nearWidth, 0 , -nearHeight], ...[nearWidth, 0, -nearHeight]].map(value => value * 9.6), 
        indices: [...[3, 1, 0], ...[2, 3, 0]], 
        normals: [...[0, 1, 0], ...[0, 1, 0], ...[0, 1, 0], ...[0, 1, 0]], 
        unv: [...[0, 1], ...[1, 1], ...[0, 0], ...[1, 0]]
    };
}
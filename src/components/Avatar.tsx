import { P2PButton, P2PImage } from "../base"

type AvatarProps = {
    left: number,
    top: number,
    width: number | string,
    height: number | string,
    avatarId: number
};

export const Avatar = (props: AvatarProps) => {
    return <P2PButton {...props}>
        <P2PImage url="/assets/texture/avatar.png" width={0.86} height={0.86} top={4} left={4} cellWidth={146} cellHeight={146} cellId={props.avatarId}/>
        <P2PImage url="/assets/img/avatar_frame.png"/>
    </P2PButton>
}
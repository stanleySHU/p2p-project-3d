import { Vector3 } from "@babylonjs/core";
import { Control } from "@babylonjs/gui";
import { P2PAdvancedDynamicTexture, P2PButton, P2PContainer, P2PDirectionalLight, P2PFreeCamera, P2PImage, P2PTextBlock } from "../base";
import { ISceneProps, SceneContext, P2PScene } from "../base/scene/Scene";
import { AdvancedDynamicTextureContext } from '../base/gui/AdvancedDynamicTexture';

const tableItemDatas = [
    {
        img: 'gpi_lobby',
        title: 'GPI Lobby'
    },
    {
        img: 'announcements',
        title: 'News'
    },
    {
        img: 'leaderboard',
        title: 'Ranking'
    },
    {
        img: 'gamerules',
        title: 'Help'
    },
    {
        img: 'settings',
        title: 'Settings'
    },

];

export const LobbyPage = (props: ISceneProps) => {


    // <P2PButton left={62} top={449} width={80/960} height={80/540}>
    //                                 <P2PImage url="/assets/img/gpi_lobby.png" left={8} top={0} height={64 / 80} width={64 / 80} />
    //                                 <P2PTextBlock text="GPI Lobby" color="#f5f5f5" top={66} height={13.4 / 80} />
    //                             </P2PButton>
    //                             <P2PButton>
    //                                 <P2PImage url="/assets/img/announcements.png" height={64} />
    //                                 <P2PTextBlock text="News" color="#f5f5f5" />
    //                             </P2PButton>
    //                             <P2PButton>
    //                                 <P2PImage url="/assets/img/leaderboard.png" height={64} />
    //                                 <P2PTextBlock text="Ranking" color="#f5f5f5" />
    //                             </P2PButton>
    //                             <P2PButton>
    //                                 <P2PImage url="/assets/img/gamerules.png" height={64} />
    //                                 <P2PTextBlock text="Help" color="#f5f5f5" />
    //                             </P2PButton>
    //                             <P2PButton>
    //                                 <P2PImage url="/assets/img/settings.png" height={64} />
    //                                 <P2PTextBlock text="Settings" color="#f5f5f5" />
    //                             </P2PButton>

    return <P2PScene {...props}>
        <SceneContext.Consumer >
            {
                ({ sceneInstance }) => <>
                    <P2PFreeCamera name="camera" scene={sceneInstance} position={new Vector3(0, 0, 0)} attachControl={[sceneInstance, true]} setTarget={Vector3.Zero()} />
                    <P2PAdvancedDynamicTexture scene={sceneInstance} background="black" name="view" idealWidth={960} idealHeight={540}>
                        <P2PImage url="/assets/img/main_bg.jpg" />
                        <P2PContainer name="container-mod">

                        </P2PContainer>
                        <P2PContainer name="navbar-mod">
                            <P2PContainer name="nav-container">
                            </P2PContainer>
                            <P2PImage url="/assets/img/nav_bar_bg.png" height={82 / 540} />
                        </P2PContainer>
                        <P2PContainer name="tabbar-mod">
                            <P2PImage url="/assets/img/tab_bar_bg.png" height={102 / 540} verticalAlignment={1} />
                            <P2PContainer name="tab-container">
                                {
                                    tableItemDatas.map((item, index) => {
                                        return <P2PButton key={item.title} left={64 + index *  127.5} top={449} width={80 / 960} height={80 / 540}>
                                            <P2PImage url={`/assets/img/${item.img}.png`} left={8} top={0} height={64 / 80} width={64 / 80} />
                                            <P2PTextBlock text={item.title} color="#f5f5f5" top={66} height={13.4 / 80} />
                                        </P2PButton>
                                    })
                                }
                            </P2PContainer>
                        </P2PContainer>
                    </P2PAdvancedDynamicTexture>
                </>
            }
        </SceneContext.Consumer>
    </P2PScene>
}
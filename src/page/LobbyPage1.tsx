import { Vector3 } from "@babylonjs/core";
import { P2PAdvancedDynamicTexture, P2PButton, P2PContainer, P2PFreeCamera, P2PImage, P2PStyle, P2PTextBlock } from "../base";
import { ISceneProps, SceneContext, P2PScene } from "../base/scene/Scene";
import { Avatar } from "../components/Avatar";

export const LobbyPage = (props: ISceneProps) => {
    return <P2PScene {...props}>
        <SceneContext.Consumer >
            {
                ({ sceneInstance }) => <>
                    <P2PFreeCamera name="camera" scene={sceneInstance} position={new Vector3(0, 0, 0)} attachControl={[sceneInstance, true]} setTarget={Vector3.Zero()} />
                    <P2PAdvancedDynamicTexture scene={sceneInstance} background="black" name="view" idealWidth={960} idealHeight={540}>
                        <P2PImage url="/assets/img/main_bg.jpg" width="960px" height="540px" />
                        <P2PContainer name="container-mod">
                            <P2PImage url="/assets/img/dealer.png" width="307px" height="388px" top={110} />
                            <P2PContainer>
                                <P2PButton left={382} top={118} width="209px" height="144px">
                                    <P2PImage url="/assets/img/free_room.png"></P2PImage>
                                    <P2PTextBlock text="Free" color="#f5f5f5" height="24px" top={103}>
                                        <P2PStyle fontSize={18} font-weight="bold" />
                                    </P2PTextBlock>
                                </P2PButton>
                                <P2PButton left={382} top={278} width="209px" height="144px">
                                    <P2PImage url="/assets/img/cash_2_room.png"></P2PImage>
                                    <P2PTextBlock text="Newbie" color="#f5f5f5" height="24px" top={103}>
                                        <P2PStyle fontSize={18} font-weight="bold" />
                                    </P2PTextBlock>
                                </P2PButton>
                                <P2PButton left={607} top={118} width="209px" height="144px">
                                    <P2PImage url="/assets/img/cash_1_room.png"></P2PImage>
                                    <P2PTextBlock text="Advanced" color="#f5f5f5" height="24px" top={103}>
                                        <P2PStyle fontSize={18} font-weight="bold" />
                                    </P2PTextBlock>
                                </P2PButton>
                                <P2PButton left={607} top={278} width="209px" height="144px">
                                    <P2PImage url="/assets/img/cash_3_room.png"></P2PImage>
                                    <P2PTextBlock text="Master" color="#f5f5f5" height="24px" top={103}>
                                        <P2PStyle fontSize={18} font-weight="bold" />
                                    </P2PTextBlock>
                                </P2PButton>
                            </P2PContainer>
                        </P2PContainer>
                        {getNavBar()}
                        {getTabBar()}
                    </P2PAdvancedDynamicTexture>
                </>
            }
        </SceneContext.Consumer>
    </P2PScene>
}

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
    }
];

function getTabBar() {
    return (
        <P2PContainer name="tabbar-mod" width="960px" height="102px" verticalAlignment={1}>
            <P2PImage url="/assets/img/tab_bar_bg.png" />
            <P2PContainer name="tab-list">
                {
                    tableItemDatas.map((item, index) => {
                        return <P2PButton key={item.title} left={64 + index * 127.5} top={13} width="80px" height="80px">
                            <P2PImage url={`/assets/img/${item.img}.png`} left={8} height="64px" width="64px" />
                            <P2PTextBlock text={item.title} color="#f5f5f5" top={60} height="20px" outlineWidth={2} outlineColor="#194447">
                                <P2PStyle fontSize={14} font-weight="bold" />
                            </P2PTextBlock>
                        </P2PButton>
                    })
                }
            </P2PContainer>
        </P2PContainer>
    );
}

function getNavBar() {
    return (
        <P2PContainer name="navbar-mod" width="960px" height="82px">
            <P2PImage url="/assets/img/nav_bar_bg.png" />
            <P2PContainer name="nav-container">
                <Avatar left={16} top={8} width="56px" height="56px" avatarId={50} />
                <P2PTextBlock text="Stanley" left={80} top={7} color="#f5f5f5" width="120px" height="32px" textHorizontalAlignment={0}>
                    <P2PStyle fontSize={24} font-weight="bold" />
                </P2PTextBlock>
                <P2PButton left={888} top={10} type='ImageOnlyButton' image="/assets/img/refresh.png" width="48px" height="48px" />
            </P2PContainer>
        </P2PContainer>
    )
}
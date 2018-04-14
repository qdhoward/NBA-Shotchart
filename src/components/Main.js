/**
 * Created by HaoYu on 2018/4/7.
 */
import React from 'react';
import {SearchBar} from './SearchBar';
import {Profile} from './Profile';
import {DataViewContainer} from './DataViewContainer';
import {DEFAULT_PLAYER} from '../constants'
import nba from 'nba';

export class Main extends React.Component {
    state = {
        // playerId: 893,
        playerInfo: {},
    };

    componentDidMount() {
        this.loadPlayerInfo(DEFAULT_PLAYER);
    }

    loadPlayerInfo = (playerName) => {
        const id = nba.findPlayer(playerName).playerId;
        nba.stats.playerInfo({PlayerID: id}).then((info) => {
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playerInfo);
            this.setState({
                playerInfo: playerInfo,
            });
        });
    };

    render() {
        return (
            <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>
        );
    }
}

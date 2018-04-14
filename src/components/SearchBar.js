/**
 * Created by HaoYu on 2018/4/14.
 */
import React from 'react';
import {AutoComplete, Input, Icon} from 'antd';
import {PROFILE_PIC_URL_PREFIX} from '../constants'
import nba from 'nba';

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    };

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map((player) => {
                    return (
                        <Option className="player-option" key={player.playerId} value={player.fullName}>
                            <img className="player-option-image"
                                 src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}/>
                            <span className="player-option-label">{player.fullName}</span>
                        </Option>
                    );
                }),
        });
    };

    onSelect = (value) => {
        this.props.loadPlayerInfo(value);
    };

    render() {
        window.nba = nba;
        const {dataSource} = this.state;
        return (
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={dataSource}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon"/>}/>
            </AutoComplete>
        );
    }
}
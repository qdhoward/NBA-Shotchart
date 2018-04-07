/**
 * Created by HaoYu on 2018/4/7.
 */
import React from 'react';
import logo from '../assets/images/logo.svg';

export class TopNavBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    } s
}


export const TEAM_PIC_URL_PREFIX = 'https://stats.nba.com/media/img/teams/logos';

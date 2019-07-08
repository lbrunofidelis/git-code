import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
<SideNav style={{backgroundColor: '#4A3632' }}
    onSelect={(selected) => {
        console.log("selected:", selected);
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                <Link to="/">
                        Home
                </Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Charts
            </NavText>
            <NavItem eventKey="/radar">
                <NavText>
                    <Link to="/pizza">Pizza</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    <Link to="/radar">Radar</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    <Link to="/scatter">Scatter</Link>
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>)}
}

export default Sidebar;
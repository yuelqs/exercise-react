require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

var menuData = require('../data/menuData.json');

var Menu = React.createClass({
    render:function() {
        return (
            <div className="menu">
                <h2 className="menu-title">功能导航</h2>
                <MenuContent data={menuData}/>
            </div>
            )
    }
});

var MenuItem = React.createClass({
    getInitialState:function(){
        return {
            show:true
        }
    },
    handleClick:function(){
        this.setState({show:!this.state.show});
        alert('clicked')
    },
    render:function() {
        var item = this.props.data.subMenu?<MenuContent dataStatus={this.state.show} data={this.props.data.subMenu}/>:'';
        return (
            <li className="menu-item" >
                <a href={this.props.data.link} onClick={this.handleClick}>{this.props.data.menuName}</a>
                {item}
            </li>
        )
    }
})

var MenuContent = React.createClass({
    render:function(){
        var item = [];
        for(var i = 0,len = this.props.data.length;i<len;i++) {
            item.push(<MenuItem key={i} data={this.props.data[i]}/>);
        }
        var className = '';
        if(typeof this.props.dataStatus !== 'undefined') {
            className = this.props.dataStatus?'on':'off';
        }
        return (
            <ul className={'menu-content '+ className}>
            {item}
            </ul>
        )
    }
});

class AppComponent extends React.Component {
    render() {
        return (<div>
            <div className="top"></div>
            <div className="container">
                <Menu/>
                <div className="content">
                    <div className="content-inner">
                    </div>
                </div>
            </div>
            </div>);
    }
}

AppComponent.defaultProps = {};

export default AppComponent;

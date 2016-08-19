require('normalize.css/normalize.css');
require('styles/App.css');
import Menu from './Menu';
import React from 'react';
import QueryTable from './QueryTable';
class AppComponent extends React.Component {
    render() {
        return (<div>
            <div className="top"></div>
            <div className="container">
                <Menu/>
                <div className="content">
                    <QueryTable />
                </div>
            </div>
            </div>);
    }
}

AppComponent.defaultProps = {};

export default AppComponent;

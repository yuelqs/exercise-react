require('normalize.css/normalize.css');
require('styles/App.css');
import Menu from './Menu';
import React from 'react';
import QueryTable from './QueryTable';
import {Link} from 'react-router';
class AppComponent extends React.Component {
    nav() {
        this.props.history.replaceState(null,'/')
    }
    render() {
        return (<div>
            <div className="top">
                {this.props.children}
                <Link to="Basic">Basic</Link>
                <button onClick={this.nav.bind(this)}>root</button>
            </div>
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

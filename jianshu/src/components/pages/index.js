import React from 'react';
import '../../assets/less/index.less';
//引入路由插件以及跳转链接
import {Switch,Route,Redirect} from 'react-router-dom'
//引入二级路由
import Nav from '../../common/nav'

import Home from '../view/home'
import Download from '../view/download'

class  Index  extends React.Component{
    render() {
        return (
            <div className="index">
                <Nav></Nav>
                <div className="content">
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/download' component={Download}></Route>
                    <Redirect to='/index/home'></Redirect>
                </Switch>
                </div>
                
            </div>
          );
    }
 
}

export default Index
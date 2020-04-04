import React from 'react';
import '../assets/less/nav.less';
//引入路由插件以及跳转链接
import {NavLink} from 'react-router-dom'
import { Input } from 'antd';
const { Search } = Input;
class  Nav  extends React.Component{
    render() {
        return (
            <div className="header">
                <nav className="clearfix">
                    {/* <!-- 左上方 Logo --> */}
                    <a className="logo" href="/">
                        <img src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt="Nav logo"/>
                    </a>
                    {/* <!-- 未登录显示登录/注册/写文章 --> */}
                    <a className="btn write-btn" target="_blank" href="/writer#/">
                        <i className="iconfont ic-write"></i>写文章
                    </a>
                    <a className="btn sign-up" id="sign_up" href="/sign_up">注册</a>
                    <a className="btn log-in" id="sign_in" href="/sign_in">登录</a>
                    <div className="zs">
                        <img src="//cdn2.jianshu.io/assets/web/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png" alt=""/>
                    </div>
                    <div className="style-mode">Aa</div>
                    {/* 中间内容 */}
                    <div className="container">
                        <ul className="navbar-nav">
                        {/* <NavLink to='/index/home' activeClassName='active'>首页</NavLink>
                        <NavLink to='/index/download' activeClassName='active'>下载</NavLink> */}
                            <li>
                                <NavLink to="/index/home" activeClassName='active'>
                                    <span className="menu-text">首页</span>
                                    <span className="iconfont menu-icon">&#xe61c;</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/index/download" activeClassName='active'>
                                    <span className="menu-text">下载APP</span>
                                    <span className="iconfont menu-icon">&#xe608;</span>
                                </NavLink>
                            </li>
                            <li className="search">
                                <div className="search_div">
                                    <Search placeholder="搜索" onSearch={value => console.log(value)} allowClear />
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
                    

          );
    }
}

export default Nav;

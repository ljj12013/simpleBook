import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//全局引入antd css样式
import 'antd/dist/antd.css'
//全局引入公共样式
import './assets/less/common.less'
//引入浏览器解析路由的插件
import {BrowserRouter} from 'react-router-dom'
//引入React-redux
import { Provider} from 'react-redux'
//全局引入Redux
import store from './store'


ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
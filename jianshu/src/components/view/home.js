import React from 'react';
import '../../assets/less/home.less';
//应用React-redux 拆分成两部分
import { connect } from 'react-redux'
//引入公共组件
import Footer from '../../common/footer'
// //引入路由插件以及跳转链接
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
//从redux中取出你需要的数据（API）
import { getArticle, reqArticleAction } from '../../store'
// import { Link } from 'react-router-dom'
import { List, Button, Avatar, Skeleton } from 'antd';
//引入api
import api from '../../util/axios'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            flag: false,
            initLoading: true,
            loading: false,
            data: [],
            list: [],
            author: [
                {
                    title: '董克平日记',
                    size: 8000580,
                    like: 52520
                },
                {
                    title: '格列柯南',
                    size: 8058000,
                    like: 5051515
                },
                {
                    title: '格列柯南',
                    size: 800200,
                    like: 54858450
                },
                {
                    title: '格列柯南',
                    size: 82626,
                    like: 585150
                },
            ]
        }

    }
    componentDidMount() {
        //组件一加载就调取接口
        // this.props.reqArticleAction()
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(19)].map(() => ({
                loading: true,
                object: {
                    data: {
                        id: {},
                        title: {},
                        slug: {},
                        list_image_url: {},
                        public_abbr: {},
                        commentable: {},
                        important_collection: {},
                        user: {
                            id: {},
                            nickname: {},
                            slug: {},
                            avatar: {}
                        },
                        total_fp_amount: {},
                        public_comments_count: {},
                        total_rewards_count: {},
                        likes_count: {}
                    }
                }
            }))),
        });
        this.getData(res => {
            this.setState({
                loading: false,
                initLoading: false,
                data: res.data,
                list: res.data,
            });
        })
    }
    //获取数据，回调res
    getData = callback => {
        api.getArticle().then(res => {
            callback(res)
        })
            .catch(err => { })
    }
    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(19)].map(() => ({
                loading: true,
                object: {
                    data: {
                        id: {},
                        title: {},
                        slug: {},
                        list_image_url: {},
                        public_abbr: {},
                        commentable: {},
                        important_collection: {},
                        user: {
                            id: {},
                            nickname: {},
                            slug: {},
                            avatar: {}
                        },
                        total_fp_amount: {},
                        public_comments_count: {},
                        total_rewards_count: {},
                        likes_count: {}
                    }
                }
            }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.data);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };

    //跳转到详情页
    goDetail(slug) {
        /*动态路由  this.props.history.push('/foodDetail/'+id) */
        /* query传参 this.props.history.push('/foodDetail?id='+id) */
        this.props.history.push({
            pathname: '/detail',
            state: {
                slug
            }
        })
    }
    //显示二维码
    show() {
        this.setState({
            flag: true
        })
    }
    //隐藏二维码
    hidden() {
        this.setState({
            flag: false
        })
    }
    render() {
        const { initLoading, loading, list, author } = this.state;
        const loadMore = !initLoading && !loading ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px', }}>
                <Button className="load-more" onClick={this.onLoadMore}>阅读更多</Button>
            </div>
        ) : null;
        return (

            <div className="home">
                <Row>
                    <Col span={16} className="main">
                        {/* <!-- 文章列表模块 --> */}
                        <div className="list-container">
                            <ul className="note-list">
                                <List
                                    className="demo-loadmore-list"
                                    loading={initLoading}
                                    itemLayout="horizontal"
                                    loadMore={loadMore}
                                    dataSource={list}
                                    renderItem={(item, index) => (
                                        <Skeleton title={true} loading={item.loading} active>
                                            <li key={index}>
                                                <div className="content">
                                                    <p className="title" onClick={() => { this.goDetail(item.object.data.slug) }}>{item.object.data.title}</p>
                                                    <p className="abstract">{item.object.data.public_abbr}</p>
                                                    <div className="meta">
                                                        <p className="jsd-meta m_r">
                                                            <span className="iconfont">&#xe64a;</span>{(item.object.data.total_fp_amount / 1000).toFixed(1)}
                                                        </p>
                                                        <p className="nickname">{item.object.data.user.nickname}</p>
                                                        <p className="comments" onClick={() => { this.goDetail(item.object.data.slug) }}>
                                                            <span className="iconfont">&#xe638;{item.object.data.public_comments_count}</span>
                                                        </p>
                                                        <p><span className="iconfont m_r">&#xe635;{item.object.data.likes_count}</span></p>
                                                    </div>
                                                </div>
                                                {item.object.data.list_image_url ? (<Link to="/detail">
                                                    <img className="wrap-img" src={item.object.data.list_image_url} alt="" />
                                                </Link>) : ("")}
                                            </li>
                                        </Skeleton>
                                    )}
                                />
                            </ul>
                        </div>
                    </Col>
                    <Col span={7} offset={1} className="right">
                        <div className="board">
                            <Link to="/">
                                <img src={require('../../assets/imges/1.png')} alt="" />
                            </Link>
                            <Link to="/">
                                <img src={require('../../assets/imges/2.png')} alt="" />
                            </Link>
                            <Link to="/">
                                <img src={require('../../assets/imges/3.png')} alt="" />
                            </Link>
                            <Link to="/">
                                <img src={require('../../assets/imges/4.png')} alt="" />
                            </Link>
                        </div>
                        {/* <!-- 首页右侧 App 下载提示 --> */}
                        <div className="index-aside-download-qrbox" onMouseEnter={() => { this.show() }} onMouseLeave={() => { this.hidden() }}>
                            {this.state.flag ? (<div className="popover"><div className="sanjiao"></div><img className="qrcode" src={require("../../assets/imges/5.png")} alt="" /></div>) : ""}
                            <img className="qrcode" src={require('../../assets/imges/5.png')} alt="" />
                            <div className="info">
                                <div className="title">下载简书手机App &gt;</div>
                                <div className="description">随时随地发现和创作内容</div>
                            </div>
                        </div>
                        <List
                            itemLayout="horizontal"
                            dataSource={author}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description={`写了${(item.size / 1000).toFixed(1)}k字 ${(item.like / 1000).toFixed(1)}k喜欢`}
                                    />
                                    <Link to="/"><span className="iconfont attention">&#xe637;关注</span></Link>
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
                <Footer></Footer>
            </div>
        );
    }
}

//定义一个函数 函数作用是从仓库中去出state值
const mapStateToProps = () => {
    return {
        article: getArticle()
    }
}
//定义一个函数 函数的作用是从仓库中(dispatch)触发action 
const mapDispatchToProps = (dispatch) => {
    return {
        reqArticleAction: () => dispatch(reqArticleAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
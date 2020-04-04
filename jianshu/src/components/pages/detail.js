import React from 'react';
import '../../assets/less/detail.less';
// //引入路由插件以及跳转链接
import { Link } from 'react-router-dom'
import Nav from '../../common/nav'
import { List, Avatar } from 'antd';
//应用React-redux 拆分成两部分
import { connect } from 'react-redux'
//从redux中取出你需要的数据（API）
import { getArticleDetail, reqArticleDetailAction } from '../../store'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            '48楼 03.30 12:20',
        content:
            '结婚是两个家庭的事，一定要双方都明事理的',
    });
}
const IconText = ({ icon, text }) => (
    <span>
        {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
    </span>
);
class Detail extends React.Component {
    constructor() {
        super()
        this.state = {
            recommendList: [
                {
                    title: "玛莎拉蒂安达市多",
                    content: "阿斯蒂芬却无法企鹅去放弃威风威风全方位服务如个人是everVR我是我大V我去额范围分为非违法吃饭",
                    author: "阿萨水浒城",
                    authorImg: "https://upload.jianshu.io/users/upload_avatars/8494499/614d45ed-f38b-4f97-86b6-45e5d1d53118.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp",
                    read: "1251",
                    comment: "18",
                    praise: "844",
                    img: "https://upload-images.jianshu.io/upload_images/8494499-3a0d5c429a7541ab?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
                },
                {
                    title: "玛莎拉蒂安达市多",
                    content: "阿斯蒂芬却无法企鹅去放弃威风威风全方位服务如个人是everVR我是我大V我去额范围分为非违法吃饭",
                    author: "阿萨水浒城",
                    authorImg: "https://upload.jianshu.io/users/upload_avatars/8494499/614d45ed-f38b-4f97-86b6-45e5d1d53118.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp",
                    read: "1251",
                    comment: "18",
                    praise: "844",
                    img: "https://upload-images.jianshu.io/upload_images/8494499-3a0d5c429a7541ab?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
                },
                {
                    title: "玛莎拉蒂安达市多",
                    content: "阿斯蒂芬却无法企鹅去放弃威风威风全方位服务如个人是everVR我是我大V我去额范围分为非违法吃饭",
                    author: "阿萨水浒城",
                    authorImg: "https://upload.jianshu.io/users/upload_avatars/8494499/614d45ed-f38b-4f97-86b6-45e5d1d53118.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp",
                    read: "1251",
                    comment: "18",
                    praise: "844",
                    img: "https://upload-images.jianshu.io/upload_images/8494499-3a0d5c429a7541ab?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
                },
                {
                    title: "玛莎拉蒂安达市多",
                    content: "阿斯蒂芬却无法企鹅去放弃威风威风全方位服务如个人是everVR我是我大V我去额范围分为非违法吃饭",
                    author: "阿萨水浒城",
                    authorImg: "https://upload.jianshu.io/users/upload_avatars/8494499/614d45ed-f38b-4f97-86b6-45e5d1d53118.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp",
                    read: "1251",
                    comment: "18",
                    praise: "844",
                    img: "https://upload-images.jianshu.io/upload_images/8494499-3a0d5c429a7541ab?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
                }
            ]
        }
    }
    componentDidMount() {
        //转换query参数的方法
        let str = this.props.location.state.slug
        console.log(str)
        this.props.reqArticleDetailAction(str)
    }
    timestampToTime(timestamp) {
        var date = new Date(Number(timestamp) * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y + M + D + h + m + s;
    }
    //处理千万逗号隔开
    toThousands(newnum) { //每隔3位，用逗号隔开
        var result = [],
            counter = 0;
        newnum = (newnum || 0).toString().split('');
        for (var i = newnum.length - 1; i >= 0; i--) {
            counter++;
            result.unshift(newnum[i]);
            if (!(counter % 3) && i !== 0) {
                result.unshift(',');
            }
        }
        return result.join('');
    }
    //清除点击下方留言的默认样式
    cler() {
        this.refs.textarea.style.boderColor = 'red';
    }
    render() {
        const { recommendList } = this.state
        const { articleDetail } = this.props
        return (
            <div className="Detail">
                <Nav></Nav>
                <div className="content">
                    <div className="main">
                        {/* 左侧固定操作 */}
                        <div className="left_operation">
                            <div className="_1pUUKr">
                                <div className="_2VdqdF">
                                    <span className="iconfont">&#xe655;</span>
                                </div>
                                <div className="P63n6G">{articleDetail.likes_count}赞</div>
                            </div>
                            <div className="_1pUUKr">
                                <div className="_2VdqdF">
                                    <span className="iconfont">&#xe611;</span>
                                </div>
                                <div className="P63n6G">{articleDetail.featured_comments_count}赞赏</div>
                            </div>
                        </div>
                        <section className="left">
                            {articleDetail.user ? (<div className="author">
                                <h1 className="title">{articleDetail.public_title}</h1>
                                {articleDetail.user ? (<List
                                    itemLayout="horizontal"
                                    dataSource={[articleDetail.user]}
                                    renderItem={(item, index) => (
                                        <List.Item >
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.avatar} />}
                                                title={<a href="https://ant.design">{item.nickname}</a>}
                                                description={<div>
                                                    <span className="iconfont">&#xe64a;{articleDetail.distribution_more_earn_percent}</span>
                                                    {this.timestampToTime(articleDetail.last_updated_at)} 字数{this.toThousands(articleDetail.wordage)} 阅读{this.toThousands(articleDetail.total_fp_amount)}</div>}
                                            />

                                        </List.Item>
                                    )}
                                />) : ("")}
                                {/* 文章内容 */}
                                <div className="article" dangerouslySetInnerHTML={{ __html: articleDetail.free_content }}></div>
                                {/* 操作 */}
                                <div className="operation">
                                    {/* 点赞 */}
                                    <div className="praise">
                                        <div className="good">
                                            <div className="quan">
                                                <span className="iconfont">&#xe655;</span>
                                            </div>
                                            {articleDetail.likes_count}人点赞&gt;
                                        </div>
                                        <div className="bad"><div className="quan">
                                            <span className="iconfont">&#xe658;</span>
                                        </div>
                                    </div>
                                </div>
                                    {/* 记忆碎片 */}
                                <div className="memory">
                                    <span className="iconfont">&#xe606;</span>
                                    <span>wqdwq </span>
                                    <div className="quan">
                                        <span>...</span>
                                    </div>
                                </div>
                                </div>
                                <div className="_19DgIp"></div>
                                <div className="_13lIbp">
                                    <div className="_191KSt">"小礼物走一走，来简书关注我"</div>
                                    <div className="_1OyPqC _3Mi9q9 _2WY0RL _1YbC5u"><span>赞赏支持</span></div>
                                    <div className="_1Segjj">
                                        <span className="yZLjoN" role="button" aria-label="查看赞赏人列表">共1人赞赏</span>
                                    </div>
                                </div>
                                <div className="authorinfo">
                                    {articleDetail.user ? (<List
                                        itemLayout="horizontal"
                                        dataSource={[articleDetail.user]}
                                        renderItem={(item, index) => (
                                            <List.Item >
                                                <List.Item.Meta
                                                    avatar={<Avatar src={item.avatar} />}
                                                    title={<div>
                                                        <a href="https://ant.design">{item.nickname}</a>
                                                        <span className="info">{articleDetail.user.intro}</span>
                                                    </div>}
                                                    description={<div>
                                                        共写了{(articleDetail.user.wordage / 10000).toFixed(1)}W字 获得{this.toThousands(articleDetail.user.likes_count)}个赞</div>}
                                                />
                                            </List.Item>
                                        )}
                                    />) : ("")}
                                </div>
                            </div>) : ("")}
                            {/* 评论 */}
                            <div className="comment">
                                <List
                                    itemLayout="vertical"
                                    size="large"
                                    pagination={{
                                        onChange: page => {
                                            console.log(page);
                                        },
                                        pageSize: 8,
                                    }}
                                    dataSource={listData}
                                    footer={
                                        <div>
                                            <b>ant design</b>添加新评论
                                        </div>
                                    }
                                    renderItem={item => (
                                        <List.Item
                                            key={item.title}
                                            actions={[
                                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                            ]}
                                        >
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.avatar} />}
                                            title={<a href={item.href}>{item.title}</a>}
                                            description={item.description}
                                        />
                                        {item.content}
                                        </List.Item>
                                    )}
                                />
                            </div>
                            <section className="recommend">
                                <h3 className="QxT4hD">
                                    <span>推荐阅读</span>
                                    <Link to="#" className="_29KFEa">更多精彩内容&gt;</Link>
                                </h3>
                                <ul className="_1iTR78">
                                    {
                                        recommendList.map((item, index) => {
                                            return (
                                                <li className="_11jppn" key={index}>
                                                    <div className="JB6qEE">
                                                        <div className="em6wEs">
                                                            <Link to="#">{item.title}</Link>
                                                        </div>
                                                        <div className="_3fvgn4">{item.content}</div>
                                                        <div className="_1pJt6F">
                                                            <Link to="#" className="_3IWz1q _1OhGeD">
                                                                <img className="_34VC_H" src={item.authorImg} alt="" />
                                                                <div className="_3tPsL6">{item.author}</div>
                                                            </Link>
                                                            <span className="_31hjBO">阅读{item.read}</span>
                                                            <span className="_31hjBO">评论{item.comment}</span>
                                                            <span className="_31hjBO">赞{item.praise}</span>
                                                        </div>
                                                    </div>
                                                    <Link to="#" className="_10MMAm">
                                                        <img className="_3zGDUj" src="https://upload-images.jianshu.io/upload_images/8494499-3a0d5c429a7541ab?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp" alt="" />
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </section>
                        </section>
                        {articleDetail.user ? (<aside className="right">
                            <section className="_3Z3nHf">
                                <div className="_3Oo-T1">
                                    <Link to="#" className="_1OhGeD"><img className="_3T9iJQ" src={articleDetail.user.avatar} alt="" /></Link>
                                    <div className="_32ZTTG">
                                        <div className="_2O0T_w">
                                            <div className="_2v-h3G">
                                                <Link to="#" className="_1OhGeD">{articleDetail.user.nickname}</Link>
                                            </div>
                                            <button data-locale="zh-CN" type="button" className="tzrf9N _1OyPqC _3Mi9q9 _34692-"><span>关注</span></button>
                                        </div>
                                        <div className="_1pXc22">总资产296</div>
                                    </div>
                                </div>
                                <div className="_19DgIp"></div>
                                {
                                    recommendList.map((item, index) => {
                                        return (
                                            <div className="_26Hhi2" key={index}>
                                                <div className="_3TNGId">
                                                    <Link className="_2ER8Tt _1OhGeD" to="#">{item.content}</Link>
                                                </div>
                                                <div className="DfvGP9">阅读{item.read}</div>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                            <section className="_3Z3nHf">
                                <h3 className="QHRnq8 QxT4hD">
                                    <span>推荐阅读</span>
                                </h3>
                                {
                                    recommendList.map((item, index) => {
                                        return (
                                            <div className="cuOxAY" key={index}>
                                                <div className="_3L5YSq"><Link to="#">{item.title}</Link></div>
                                                <div className="_19haGh">阅读{item.read}</div>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                        </aside>) : ("")}
                    </div>
                </div>
                <footer>
                    <div className="_2xr8G8">
                        <div className="_1Jdfvb">
                            <div className="TDvCqd">
                                <textarea className="W2TSX_" placeholder="写下你的评论..." ref="textarea" onClick={() => { this.cler() }}></textarea>
                            </div>
                            <div className="-pXE92">
                                <div className="_3nj4GN">
                                    <span className="iconfont">&#xe638;</span>
                                    <span>评论36</span>
                                </div>
                                <div className="_3nj4GN">
                                    <span className="iconfont">&#xe655;</span>
                                    <span>评论36</span>
                                </div>
                                <div className="_3nj4GN">
                                    <span>&#8226;&#8226;&#8226;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

}
//定义一个函数 函数作用是从仓库中去出state值
const mapStateToProps = () => {
    return {
        articleDetail: getArticleDetail()
    }
}
//定义一个函数 函数的作用是从仓库中(dispatch)触发action 
const mapDispatchToProps = (dispatch) => {
    return {
        reqArticleDetailAction: (data) => dispatch(reqArticleDetailAction(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);

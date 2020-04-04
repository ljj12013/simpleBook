import React from 'react';
import '../assets/less/footer.less';
import { Row, Col } from 'antd';
//引入路由插件以及跳转链接
import {Link} from 'react-router-dom'
class  Footer  extends React.Component{
    render() {
        return (
            <footer className="container">
                <Row>
                    <Col span={17} className="main">
                        <Link to="#">关于简书</Link>
                        <em> · </em>
                        <Link to="#">联系我们</Link>
                        <em> · </em>
                        <Link to="#">加入我们</Link>
                        <em> · </em>
                        <Link to="#">简书出版</Link>
                        <em> · </em>
                        <Link to="#">品牌与徽标</Link>
                        <em> · </em>
                        <Link to="#">帮助中心</Link>
                        <em> · </em>
                        <Link to="#">合作伙伴</Link>
                        <div className="icp">
                        ©2012-2020 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 / 
                        <Link to="#">
                            <img src="https://cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png" alt=""/>
                        </Link>
                        <Link to="#">沪公网安备31010402002252号 / </Link>
                        <Link to="#">
                            <img src="https://cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png" alt=""/>
                        </Link>
                        简书网举报电话：021-34770013 / 
                        <Link to="#">
                            <img src="https://cdn2.jianshu.io/assets/web/fanzha-10518f0f6b33635180b190975ae68ca6.jpg" alt=""/>
                        </Link>
                        亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 / 
                        <Link to="#">
                            <img src="https://cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png" alt=""/>
                        </Link>
                        </div>
                    </Col>
                </Row>
            </footer>
          );
    }
 
}

export default Footer;

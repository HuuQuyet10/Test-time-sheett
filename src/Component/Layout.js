import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Dashboard from '../Component/Dashboard.js';
import Calendar from '../Component/Calendar.js';
import Config from '../Component/Config.js';
import TimeSheet from '../Component/TimeSheet.js';
import Wordtime from '../Component/Wordtime.js';
import '../Style/Styleindex.css';
const { Header, Content, Footer, Sider } = Layout;
class Bodyweb extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    tenuser: 'Pham Huu Quyet'
                }
            ]
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Layout>
                        <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                        >
                        <Menu  mode="inline"  className="backtou" defaultSelectedKeys={['4']}>
                            <div className="style-sider-menu">
                                <Link to="/">
                                    {this.state.data.map((item, index) => {
                                        return (
                                            <div key={index} className="style-hdvf">
                                                <h1>ISOFH TIMESHEET</h1>
                                                <p>Xin chào {item.tenuser}</p>
                                                <Button className="style-logout">ĐĂNG XUẤT</Button>
                                            </div>
                                        )
                                    })}
                                </Link>
                            </div>
                            <hr className="style-hr-sider"></hr>
                            <Menu.Item key="1">
                                <UserOutlined />
                                <Link to="/">DASHBOARD</Link>
                            </Menu.Item>

                            <Menu.Item key="2">
                                <VideoCameraOutlined />
                                <Link to="/calendar">TRONG THÁNG</Link>
                            </Menu.Item>

                            <Menu.Item key="3">
                                <UploadOutlined />
                                <Link to="/config">CẤU HÌNH</Link>
                            </Menu.Item>

                            <Menu.Item key="4">
                                <BarChartOutlined />
                                <Link to="/time-sheet">NHẬP CÔNG VIỆC</Link>
                            </Menu.Item>
                        </Menu>
                        </Sider>
                        
                        <Layout style={{ marginLeft: 200 }}>
                            <Content style={{ margin: '24px 16px 0'}}>
                                <div style={{ padding: 24, textAlign: 'center' }}>
                                    <div className="style-backgorund">
                                        <Switch>
                                            <Route exact path="/">
                                                <Dashboard />
                                            </Route>
                                            <Route path="/calendar">
                                                <Calendar />
                                            </Route>
                                            <Route path="/config">
                                                <Config />
                                            </Route>
                                            <Route path="/time-sheet">
                                                <TimeSheet />
                                            </Route>
                                        </Switch>
                                    </div>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </Router>
        )
    }
}

export default Bodyweb;
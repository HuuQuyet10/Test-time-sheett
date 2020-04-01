import React, { Component } from 'react';
import { notification, Button, Row, Col, Card } from 'antd';
import ChartHinhtron from '../Component/ChartJS/ChartHinhtron.js';
import '../../src/Style/Styledashboard.css';



const openNotification = () => {
    notification.open({
      duration: 9,
      message: 'Chức năng đang dược phát triển', 
    });
  };
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theothang: [
                {
                    month: 10,
                    hours: 30,
                    minute: 34,
                    project: 1
                }
            ],
            theonam: [
                {
                    year: 2020,
                    hours: 30,
                    minute: 34,
                    project: 1
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                    <div className="site-card-border-less-wrapper style-component-dashboard">
                            <Card className="style-cardtop" bordered={false}>
                                <div className="styleicon">
                                    <i class="material-icons">donut_small</i>
                                </div>
                                {this.state.theothang.map((item, index) => {
                                    return (
                                        <div key={index} className="style-tx-p">
                                            <p className="tx-p-1">Effort trong tháng {item.month}</p>
                                            <p className="tx-p-2">{item.hours} giờ, {item.minute}phút/{item.project}dự án</p>
                                        </div>
                                    )
                                })}
                                <div className="style-chartjs">
                                    <ChartHinhtron />
                                </div>
                                <hr className="style-les-hr"></hr>
                                <div className="style-deltai">
                                    <i className="material-icons style-icon-list">list</i>
                                    <Button type="link" onClick={openNotification}>Chi tiết</Button>
                                </div>  
                            </Card>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="site-card-border-less-wrapper style-component-dashboard">
                            <Card className="style-cardtop" bordered={false}>
                                <div className="styleicon">
                                    <i class="material-icons">donut_small</i>
                                </div>
                                {this.state.theonam.map((item, index) => {
                                    return (
                                        <div key={index} className="style-tx-p">
                                            <p className="tx-p-1">Effort trong năm {item.year}</p>
                                            <p className="tx-p-2">{item.hours} giờ, {item.minute}phút/{item.project}dự án</p>
                                        </div>
                                    )
                                })}
                                <div className="style-chartjs">
                                    <ChartHinhtron />
                                </div>
                                <hr className="style-les-hr"></hr>
                                <div className="style-deltai">
                                    <i className="material-icons style-icon-list">list</i>
                                    <Button type="link" onClick={openNotification}>Chi tiết</Button>
                                </div>  
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
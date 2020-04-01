import React, { Component } from 'react';
import { Row, Col } from 'antd';
import TranferCongviec from '../FormTranfer/TranferCongviec.js';
import '../../Style/Config.css';

class Congviec extends Component {
    render() {
        return (
            <div>
                <div className="style-duan">
                    <i class="material-icons">dashboard</i>
                    <p>CÔNG VIỆC CỦA TÔI</p>
                </div>
                <div className="Syle-tranfer">
                    <Row>
                        <Col span={24}>
                            <TranferCongviec className="style-tranfaer"/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Congviec;
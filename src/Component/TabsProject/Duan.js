import React, { Component } from 'react';
import TranferDuan from '../FormTranfer/TranferDuan.js';
import { Row, Col } from 'antd';
import '../../Style/Config.css';

class Duan extends Component {
    render() {
        return (
            <div>
                <div className="style-duan">
                    <i class="material-icons">dashboard</i>
                    <p>DỰ ÁN TÔI THAM RA</p>
                </div>
                <div className="Syle-tranfer">
                    <Row>
                        <Col span={24}>
                            <TranferDuan  className="style-tranfaer"/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Duan;
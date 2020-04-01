import React, { Component } from 'react';
import TranferSanpham from '../FormTranfer/TranferSanpham.js';
import { Row, Col } from 'antd';
import '../../Style/Config.css';

class Sanpham extends Component {
    render() {
        return (
            <div>
                <div className="style-duan">
                    <i class="material-icons">dashboard</i>
                    <p>SẢN PHẨM TÔI THAM RA</p>
                </div>
                <div className="Syle-tranfer">
                    <Row>
                        <Col span={24}>
                            <TranferSanpham className="style-tranfaer"/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Sanpham;
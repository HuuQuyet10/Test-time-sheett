import React, { Component } from 'react';
import { Tabs } from 'antd';
import Duan from '../Component/TabsProject/Duan.js';
import Congviec from '../Component/TabsProject/Congviec.js';
import Sanpham from '../Component/TabsProject/Sanpham.js';
import '../Style/Config.css';



const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }
class Config extends Component {
    render() {
        return (
            <div>
               <div className="style-tabs-index">
                    <Tabs onChange={callback} type="card">
                        <TabPane tab="Dự án" key="1">
                            <Duan />
                        </TabPane>
                        <TabPane tab="Công việc" key="2">
                            <Congviec />
                        </TabPane>
                        <TabPane tab="Sản phẩm" key="3">
                            <Sanpham />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Config;
import React, { Component } from 'react';
import '../../Style/Config.css';
import { Transfer, Switch , Row, Col } from 'antd';




class TranferDuan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mockData: [],
            targetKeys: [],
        };
    }
    componentDidMount() {
        this.getMock();
    }
    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 30; i++) {
          const data = {
            key: i.toString(),
            title: `congviec${i + 1}`,
            description: `description of viec${i + 1}`,
            chosen: Math.random() * 2 > 1,
          };
          if (data.chosen) {
            targetKeys.push(data.key);
          }
          mockData.push(data);
        }
        this.setState({ mockData, targetKeys });
    };
    filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;
    handleChange = targetKeys => {
        this.setState({ targetKeys });
    };
    
    handleSearch = (dir, value) => {
        console.log('search:', dir, value);
    };

    render() {

        return (
            <div>
                <Row>
                    <Col span={24}>
                        <Transfer
                            dataSource={this.state.mockData}
                            showSearch
                            style={{display: 'flex'}}
                            listStyle={{flex: 1, height: 350}}
                            titles={['Chưa chọn', 'Đã chọn']}
                            filterOption={this.filterOption}
                            targetKeys={this.state.targetKeys}
                            onChange={this.handleChange}
                            onSearch={this.handleSearch}
                            render={item => item.title}
                        />
                    </Col>   
                </Row> 
            </div>
        );
    }
}

export default TranferDuan;
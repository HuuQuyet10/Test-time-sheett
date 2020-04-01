import React, { Component } from 'react';

class DrawerEdit extends Component {
    render() {
        return (
            <div>
                <Drawer
                    title="Sửa công việc này"
                    width={720}
                        onClose={this.onClose}
                        visible={this.state.visibleSua}
                        bodyStyle={{ paddingBottom: 80 }}
                        footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button
                                onClick={this.onClose}
                                style={{ marginRight: 8 }}
                            >
                                Cancel
                                                           </Button>
                            <Button onClick={this.onClose} type="primary">
                                Submit
                                                        </Button>
                        </div>
                    }>
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Form.Item
                                    label="Ngày làm việc"
                                    name="ngaylamviec"
                                >
                                    <DatePicker onChange={onChange} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Thời gian bắt đầu"
                                    name="thoigianbatdau"
                                >
                                    <TimePicker defaultValue={moment('12:08', format)} format={format} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Thời gian kết thúc"
                                    name="thoigianketthuc"
                                >
                                    <TimePicker defaultValue={moment('12:08', format)} format={format} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Form.Item
                                    name="chonsanpham"
                                    label="Chọn sản phẩm"
                                    rules={[{ required: true, message: 'Chọn sản phẩm' }]}
                                >
                                    <Select placeholder="Chọn sản phẩm">
                                        <Option value="ahaxiao">AIMS</Option>
                                        <Option value="madfvdfo">Chống nhiễm khuẩn</Option>
                                        <Option value="fđfv">COMMAND CENTER</Option>
                                        <Option value="rtxiadfvdo">Công ty</Option>
                                        <Option value="rrtxiao">Device</Option>
                                        <Option value="xifvdfao">ERM</Option>
                                        <Option value="ssbvxfvdfvvdiao">FBFBGF</Option>
                                        <Option value="yyxiao">BFG</Option>
                                        <Option value="tuxdfcvbvvviao">THBFGBFGIS</Option>
                                        <Option value="yyjjxivbao">FGBF</Option>
                                        <Option value="nbvxcvbiao">THFGBFGBIS</Option>
                                        <Option value="vbnxbvcbiao">THFGBFGIS</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Form.Item
                                    name="chonduan"
                                    label="Chọn dự án"
                                    rules={[{ required: true, message: 'Chọn dự án' }]}
                                >
                                    <Select placeholder="Chọn dự án">
                                        <Option value="ahaxiao">AIMS</Option>
                                        <Option value="madfvdfo">Chống nhiễm khuẩn</Option>
                                        <Option value="fđfv">COMMAND CENTER</Option>
                                        <Option value="rtxiadfvdo">Công ty</Option>
                                        <Option value="rrtxiao">Device</Option>
                                        <Option value="xifvdfao">ERM</Option>
                                        <Option value="ssbvxfvdfvvdiao">FBFBGF</Option>
                                        <Option value="yyxiao">BFG</Option>
                                        <Option value="tuxdfcvbvvviao">THBFGBFGIS</Option>
                                        <Option value="yyjjxivbao">FGBF</Option>
                                        <Option value="nbvxcvbiao">THFGBFGBIS</Option>
                                        <Option value="vbnxbvcbiao">THFGBFGIS</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Form.Item
                                    name="choncongviec"
                                    label="Chọn công việc"
                                    rules={[{ required: true, message: 'Chọn công việc' }]}
                                >
                                    <Select placeholder="Chọn công việc">
                                        <Option value="ahaxiao">AIMS</Option>
                                        <Option value="madfvdfo">Chống nhiễm khuẩn</Option>
                                        <Option value="fđfv">COMMAND CENTER</Option>
                                        <Option value="rtxiadfvdo">Công ty</Option>
                                        <Option value="rrtxiao">Device</Option>
                                        <Option value="xifvdfao">ERM</Option>
                                        <Option value="ssbvxfvdfvvdiao">FBFBGF</Option>
                                        <Option value="yyxiao">BFG</Option>
                                        <Option value="tuxdfcvbvvviao">THBFGBFGIS</Option>
                                        <Option value="yyjjxivbao">FGBF</Option>
                                        <Option value="nbvxcvbiao">THFGBFGBIS</Option>
                                        <Option value="vbnxbvcbiao">THFGBFGIS</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Form.Item
                                    name="motacongviec"
                                    label="Mô tả công việc"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Mô tả công việc',
                                        },
                                    ]}
                                >
                                    <Input.TextArea rows={4} placeholder="Mô tả công việc" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Form.Item
                                    name="ticket"
                                    label="Ticket"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Mô tả công việc',
                                        },
                                    ]}
                                >
                                    <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>{children}</Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </div>
        );
    }
}

export default DrawerEdit;
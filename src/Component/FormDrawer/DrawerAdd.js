import React, { Component } from "react";
import {
  TimePicker,
  DatePicker,
  Button,
  Drawer,
  Form,
  Col,
  Row,
  Input,
  Select,
  Popconfirm,
  notification
} from "antd";
import moment from "moment";
import axios from "axios";



function handleChange(value) {
  console.log(`selected ${value}`);
}
function onChange(date, dateString) {
  console.log(date, dateString);
}
const openNotificationXoa = () => {
  notification.open({
    message: "Xóa thành công"
  });
};
const openNotificationSua = () => {
  notification.open({
    message: "Sửa thành công"
  });
};
const openNotificationThem = () => {
  notification.open({
    message: "Thêm thành công"
  });
};
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const format = "HH:mm";

class DrawerAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: "",
          duan: "",
          sanpham: "",
          congviec: "",
          giobatdau: "",
          gioketthuc: "",
          motacongviec: ""
        }
      ],
      dataTemp: {},
      tuychon: [],
      visibleThemmoi: false,
      visibleSua: false,
      visibleSaochep: false
    };
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    axios
      .get(`https://5e7868d6491e9700162de083.mockapi.io/api/v1/todo`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
  };
  showDrawerThemmoi = () => {
    this.setState({
      visibleThemmoi: true
    });
  };
  onClose = () => {
    this.setState({
      visibleThemmoi: false,
      visibleSua: false,
      visibleSaochep: false
    });
  };
  onChange = type => e => {
    let dataTemp = this.state.dataTemp;
    switch (type) {
      case 1:
        dataTemp.giobatdau = e.target.value;
        break;
      case 2:
        dataTemp.gioketthuc = e.target.value;
        break;
      case 3:
        dataTemp.sanpham = e.target.value;
        break;
      case 4:
        dataTemp.duan = e.target.value;
        break;
      case 5:
        dataTemp.congviec = e.target.value;
        break;
      case 6:
        dataTemp.motacongviec = e.target.value;
        break;
      default:
    }
    this.setState({
      dataTemp: { ...dataTemp }
    });
  };
  handleChangeGiobatdau = event => {
    this.setState({ giobatdau: event.target.value });
  };
  handleChangeGioketthuc = event => {
    this.setState({ gioketthuc: event.target.value });
  };
  handleChangeSanpham = event => {
    this.setState({ sanpham: event.target.value });
  };
  handleChangeDuan = event => {
    this.setState({ duan: event.target.value });
  };
  handleChangeCongviec = event => {
    this.setState({ congviec: event.target.value });
  };
  handleChangeMotacongviec = event => {
    this.setState({ motacongviec: event.target.value });
  };
  insertUser = event => {
    axios
      .post(
        "https://5e7868d6491e9700162de083.mockapi.io/api/v1/todo/",
        this.state.dataTemp
      )
      .then(res => {
        openNotificationThem();
        this.loadData();
      });
  };
  render() {
    const {
      giobatdau = "",
      gioketthuc = "",
      sanpham = "",
      duan = "",
      congviec = "",
      motacongviec = ""
    } = this.state.dataTemp;
    return (
      <div>
        {/* Drawer tạo công việc */}
        <Drawer
          title="Nhập mô tả công việc"
          width={720}
          onClose={this.onClose}
          visible={this.state.visibleThemmoi}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right"
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  this.insertUser();
                  this.onClose();
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark onSubmit={this.insertUser}>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="Thời gian bắt đầu">
                  <Input
                    defaultValue={moment("12:08", format)}
                    format={format}
                    value={giobatdau}
                    ref="myAddtimestart"
                    onChange={this.onChange(1)}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Thời gian kết thúc">
                  <Input
                    defaultValue={moment("12:08", format)}
                    format={format}
                    value={gioketthuc}
                    ref="myAddtimeend"
                    onChange={this.onChange(2)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  label="Chọn sản phẩm"
                  rules={[{ required: true, message: "Chọn sản phẩm" }]}
                >
                  <Input
                    value={sanpham}
                    ref="myChonsanpham"
                    onChange={this.onChange(3)}
                    placeholder="Vui long dien ten san pham"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  label="Chọn dự án"
                  rules={[{ required: true, message: "Chọn dự án" }]}
                >
                  <Input
                    value={duan}
                    ref="myChonduan"
                    onChange={this.onChange(4)}
                    placeholder="Vui long dien ten du an"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  label="Chọn công việc"
                  rules={[{ required: true, message: "Chọn công việc" }]}
                >
                  <Input
                    value={congviec}
                    ref="myChoncongviec"
                    onChange={this.onChange(5)}
                    placeholder="Vui long dien ten cong viec"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  label="Mô tả công việc"
                  rules={[
                    {
                      required: true,
                      message: "Mô tả công việc"
                    }
                  ]}
                >
                  <Input.TextArea
                    value={motacongviec}
                    onChange={this.onChange(6)}
                    ref="myMotacongviec"
                    rows={4}
                    placeholder="Mô tả công việc"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </div>
    );
  }
}

export default DrawerAdd;

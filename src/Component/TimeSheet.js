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
import "../../src/Style/Styletimesheet.css";

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
class TimeSheet extends Component {
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

  // SỬ DỤNG AXIOS ĐỂ GỌI API VÀ RENDER RA HTML
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

  // TẠO CÁC SỰ KIỆN ONCHANGE( GET VALUE INPUT )
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

  // TẠO CÁC handleChange CHO CÁC INPUT ĐỂ CÓ NHẬP TEXT VÀO
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


// SHOW CÁC MODAL RA
// MODAL THÊM MỚI
  showDrawerThemmoi = () => {
    this.setState({
      visibleThemmoi: true
    });
  };

// MODAL SỬA
  showDrawerSua = item => e => {
    e.preventDefault();
    this.setState({
      visibleSua: true,
      currentId: item.id,
      giobatdau: item.giobatdau,
      gioketthuc: item.gioketthuc,
      sanpham: item.sanpham,
      duan: item.duan,
      congviec: item.congviec,
      motacongviec: item.motacongviec
    });
    console.log(item);
  };
 
// MODAL SAO CHÉP  
  showDrawerSaochep = () => {
    this.setState({
      visibleSaochep: true
    });
  };

// SỰ KIỆN NÚT ĐÓNG 
  onClose = () => {
    this.setState({
      visibleThemmoi: false,
      visibleSua: false,
      visibleSaochep: false
    });
  };

// các sự kiến THÊM, SỬA, XÓA

// Phần thêm: 
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

// Phần Sửa: 
  editUser = e => {
    let currentId = this.state.currentId;
    const item = {
      giobatdau: this.state.giobatdau,
      gioketthuc: this.state.gioketthuc,
      sanpham: this.state.sanpham,
      duan: this.state.duan,
      congviec: this.state.congviec,
      motacongviec: this.state.motacongviec
    };
    axios
      .put(
        `https://5e7868d6491e9700162de083.mockapi.io/api/v1/todo/${currentId}`,
        item
      )
      .then(res => {
        openNotificationSua();
        this.loadData();
      });
  };

// Phần Xóa
  onDelete = id => {
    axios
      .delete("https://5e7868d6491e9700162de083.mockapi.io/api/v1/todo/" + id)
      .then(res => {
        if (res.data != null) {
          openNotificationXoa();
          this.setState({
            persons: this.state.persons.filter(persons => persons.id !== id)
          });
        }
      });
  };

// Render ra các html  
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
        <div className="total-timesheet">
          <div className="style-time-sheet">
            <p>DANH SÁCH CÔNG VIỆC</p>
          </div>
          <div className="calader-month">
            <DatePicker onChange={onChange} className="sty-date-picker" />
            <Button
              type="primary"
              className="sty-date-button"
              onClick={this.showDrawerThemmoi}
            >
              THÊM CÔNG VIỆC
            </Button>
          </div>
          <br></br>
          <br></br>
          <div className="style-tabless">
            <table className="style-table-one">
              <tr>
                <td className="td-1">
                  <strong>#</strong>
                </td>
                <td className="td-2">
                  <strong>Dự án</strong>
                </td>
                <td className="td-3">
                  <strong>Sản phẩm</strong>
                </td>
                <td className="td-4">
                  <strong>Công việc</strong>
                </td>
                <td className="td-5">
                  <strong>Bắt đầu</strong>
                </td>
                <td className="td-6">
                  <strong>Kết thúc</strong>
                </td>
                <td className="td-7"></td>
              </tr>
              {this.state.persons.map((item, index, id) => {
                return (
                  <tbody key={index} onSubmit={this.handleSubmit}>
                    <td name="id" onChange={this.handleChange}>
                      {item.id}
                    </td>
                    <td>{item.duan}</td>
                    <td>{item.sanpham}</td>
                    <td className="style-congviec">{item.congviec}</td>
                    <td>{item.giobatdau}</td>
                    <td>{item.gioketthuc}</td>
                    <td>
                      <Button
                        title="Xem chi tiết"
                        className="style-btn-addeedit"
                      >
                        <span class="material-icons styl-econ-material">
                          visibility
                        </span>
                      </Button>
                      <Button
                        className="style-btn-addeedit"
                        title="Sao chép công việc này"
                        onClick={this.showDrawerSaochep}
                      >
                        <span class="material-icons styl-econ-material">
                          file_copy
                        </span>
                      </Button>
                      <Button
                        title="Sửa công việc này"
                        onClick={this.showDrawerSua(item)}
                        className="style-btn-addeedit"
                      >
                        <span class="material-icons styl-econ-material">
                          edit
                        </span>
                      </Button>
                      <Button
                        title="Xóa công việc này"
                        className="style-btn-addeedit"
                        onClick={() => this.onDelete(item.id)}
                      >
                        <span class="material-icons styl-econ-material">
                          delete_forever
                        </span>
                        <Popconfirm></Popconfirm>
                      </Button>
                    </td>
                  </tbody>
                );
              })}
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
                <Form
                  layout="vertical"
                  hideRequiredMark
                  onSubmit={this.insertUser}
                >
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
              {/* Drawer sao chép công việc */}
              <Drawer
                title="Sao chép công việc"
                width={720}
                onClose={this.onClose}
                visible={this.state.visibleSaochep}
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
                    <Button onClick={this.onClose} type="primary">
                      Submit
                    </Button>
                  </div>
                }
              >
                <Form layout="vertical" hideRequiredMark>
                  <Row gutter={24}>
                    <Col span={8}>
                      <Form.Item label="Ngày làm việc" name="ngaylamviec">
                        <DatePicker onChange={onChange} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="Thời gian bắt đầu"
                        name="thoigianbatdau"
                      >
                        <TimePicker
                          defaultValue={moment("12:08", format)}
                          format={format}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="Thời gian kết thúc"
                        name="thoigianketthuc"
                      >
                        <TimePicker
                          defaultValue={moment("12:08", format)}
                          format={format}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col span={24}>
                      <Form.Item
                        name="chonsanpham"
                        label="Chọn sản phẩm"
                        rules={[{ required: true, message: "Chọn sản phẩm" }]}
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
                        rules={[{ required: true, message: "Chọn dự án" }]}
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
                        rules={[{ required: true, message: "Chọn công việc" }]}
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
                            message: "Mô tả công việc"
                          }
                        ]}
                      >
                        <Input.TextArea
                          rows={4}
                          placeholder="Mô tả công việc"
                        />
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
                            message: "Mô tả công việc"
                          }
                        ]}
                      >
                        <Select
                          mode="tags"
                          style={{ width: "100%" }}
                          placeholder="Tags Mode"
                          onChange={handleChange}
                        >
                          {children}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Drawer>
              {/* Drawer sửa công việc */}
              <Drawer
                title="Sửa công việc này"
                width={720}
                onClose={this.onClose}
                visible={this.state.visibleSua}
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
                        this.editUser();
                        this.onClose();
                      }}
                      type="primary"
                    >
                      Submit
                    </Button>
                  </div>
                }
              >
                <Form
                  layout="vertical"
                  hideRequiredMark
                  onSubmit={this.insertUser}
                >
                  <Row gutter={24}>
                    <Col span={12}>
                      <Form.Item label="Thời gian bắt đầu">
                        <Input
                          defaultValue={moment("12:08", format)}
                          format={format}
                          value={this.state.giobatdau}
                          ref="myEdittimestart"
                          onChange={this.handleChangeGiobatdau}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Thời gian kết thúc">
                        <Input
                          defaultValue={moment("12:08", format)}
                          format={format}
                          value={this.state.gioketthuc}
                          ref="myEdittimeend"
                          onChange={this.handleChangeGioketthuc}
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
                          value={this.state.sanpham}
                          ref="myEditChonsanpham"
                          onChange={this.handleChangeSanpham}
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
                          value={this.state.duan}
                          ref="myEditChonduan"
                          onChange={this.handleChangeDuan}
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
                          value={this.state.congviec}
                          ref="myEditChoncongviec"
                          onChange={this.handleChangeCongviec}
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
                          value={this.state.motacongviec}
                          onChange={this.handleChangeMotacongviec}
                          ref="myEditMotacongviec"
                          rows={4}
                          placeholder="Mô tả công việc"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Drawer>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeSheet;

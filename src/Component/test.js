import React, { Component } from "react";
import "./styles.scss";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "mai ngoc nam",
          age: 30,
          address: "thanh hoa"
        },
        {
          id: 2,
          name: "mai ngoc nam2",
          age: 30,
          address: "thanh hoa"
        },
        {
          id: 3,
          name: "mai ngoc nam3",
          age: 30,
          address: "thanh hoa"
        },
        {
          id: 4,
          name: "mai ngoc nam4",
          age: 30,
          address: "thanh hoa"
        }
      ],
      dataTemp: {}
    };
  }
  onChange = type => e => {
    let dataTemp = this.state.dataTemp;
    switch (type) {
      case 1:
        dataTemp.id = e.target.value;
        break;
      case 2:
        dataTemp.name = e.target.value;
        break;
      case 3:
        dataTemp.age = e.target.value;
        break;
      case 4:
        dataTemp.address = e.target.value;
        break;
      default:
    }
    this.setState({
      dataTemp: { ...dataTemp }
    });
  };
  onSave = () => {
    let data = this.state.data;
    if (this.state.editMode) {
      data.splice(this.state.currentIndex, 1, this.state.dataTemp);

      //[].filter
      //   [].find
      //   [].map
      //   [].findIndex

      //   let index = this.state.currentIndex;
      //   let dataTemp = this.state.dataTemp;

      //   data[index].name = this.state.name;
      //   data[index].age = this.state.age;
      //   data[index].address = this.state.address;

      //   data[index] = dataTemp;
    } else {
      data.push(this.state.dataTemp);
    }
    this.setState({
      data: data,
      dataTemp: {},
      editMode: false
    });
  };

  edit = (item, index) => () => {
    let cloneObj = JSON.parse(JSON.stringify(item));
    this.setState({
      dataTemp: cloneObj,
      editMode: true,
      currentIndex: index
    });
  };
  delete = id => () => {
    // this.setState({
    //   data: this.state.data.filter(item2 => item2 != item)
    // });
    let data = this.state.data;
    let item = data.find(item => item.id == id);
    this.setState({
      data: this.state.data.filter(item2 => item2 != item)
    });

    // this.setState({
    //   data: this.state.data.filter(item2 => item2.id != id)
    // });

    // let index = this.state.data.findIndex(item => item.id == id);
    // data.splice(index, 1);
    // this.setState({
    //   data: [...data]
    // });
};
  render() {
    const { id = "", name = "", age = "", address = "" } = this.state.dataTemp;
    return (
      <div className="container">
        <div className="sidebar">Cot trai</div>
        <div className="body">
          <div>
            <label className="label">id</label>
            <input
              className="input"
              type="text"
              readOnly={this.state.editMode}
              value={id}
              onChange={this.onChange(1)}
            ></input>
            <label className="label">họ tên</label>
            <input
              className="input"
              type="text"
              value={name}
              onChange={this.onChange(2)}
            ></input>
            <label className="label">tuổi</label>
            <input
              className="input"
              type="text"
              value={age}
              onChange={this.onChange(3)}
            ></input>
            <label className="label">địa chỉ</label>
            <input
              className="input"
              type="text"
              value={address}
              onChange={this.onChange(4)}
            ></input>
            <button onClick={this.onSave}>Lưu</button>
          </div>
          <table>
            <tr>
              <td>stt</td>
              <td>id</td>
              <td>họ tên</td>
              <td>tuổi</td>
              <td>địa chỉ</td>
              <td>action</td>
            </tr>
            <tbody>
              {this.state.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>
                      <button onClick={this.edit(item, index)}>sua</button>
                      <button onClick={this.delete(item.id)}>xóa</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default index;
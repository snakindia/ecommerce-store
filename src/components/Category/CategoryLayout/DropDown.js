import React, { Component } from 'react';
export default class DropDown extends Component {
  render() {
    const { styles } = this.props;
    return (
      <select
        id="shortOption"
        className="form-control-select form-select"
        style={styles}
      >
        <option>12</option>
        <option>50</option>
        <option>100</option>
        <option>200</option>
      </select>
    );
  }
}

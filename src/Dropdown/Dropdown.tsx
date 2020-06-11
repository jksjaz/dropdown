import React, { Component } from 'react';
import Option from "./Option"

interface DropdownProps {
  selected: number
}

interface OptionType {
  key: number,
  id: number,
  title: string
}

export default class Dropdown extends Component<any, any> {
  constructor(props: DropdownProps) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ selected: e.target.value })

  render() {
    return (
      <select className="dropdown" value={this.state.selected} onChange={this.handleChange}>
        { this.props.data.map((option: OptionType) => <Option key={option.id} {...option}/>) }
      </select>
    );
  }
}
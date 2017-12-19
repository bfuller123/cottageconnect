import React from 'react';


class List extends React.Component {
  render() {
    return(<li>{this.props.name}</li>);
  }
}

export default List;

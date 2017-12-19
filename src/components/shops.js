import React from 'react';
import List from './list';
let shops = [{name: "Brett's Burgers"}, {name: "Kim's Kookies"}, {name: "Conrad Coffee Roasters"}, {name: "David's Doughs"}];

class Shops extends React.Component {
  render() {
    //taking a list and mapping into a new list that contains every list item
    const list = shops.map((item) => (
      <List name={item.name} />
    ));

    //since React can render based on Arrays, we throw in the list of list items to be rendered
    return(<ul>{list}</ul>);
  }
}

export default Shops;

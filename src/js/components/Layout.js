import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: "Hello" };
  }
  changeTitle = (title) => {
    this.setState({title});
  }
  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle} title={this.state.title}></Header>
        <Footer></Footer>
      </div>
    );
  }
}

import React, { Component } from "react";
import Arrow from "../components/Arrow";
//import { Col, Image, Row } from "react-bootstrap";

export default class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  onClick() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    let subtree = null;

    if (this.props.data.contents) {
      subtree = this.props.data.contents.map(
        function(child) {
          return <TreeNode key={child.type} data={child} />;
        }.bind(this)
      );
    }

    var arrowClassName = "tree-node-arrow";
    var containerClassName = "tree-node-children";
    if (this.state.collapsed) {
      arrowClassName += " tree-node-arrow-collapsed";
      containerClassName += " tree-node-children-collapsed";
    }
    

    if (subtree) {
      console.log(this.props.data.name);
      return (
        <div className="tree-node">
          <Arrow
            arrowClassName={arrowClassName}
            onClick={this.onClick.bind(this)}
          />
          <a data-id={this.props.data.name}>{this.props.data.name}</a>
          <div className={containerClassName}>{subtree}</div>
        </div>
      );
    } else {
      var filename = this.props.data.name;
      var path = require("path");
      var ext = path.extname(this.props.data.name).substring(1);
      var types = ["png", "tif", "gif", "jpg", "jpeg", "jpe"];

      return (
        <div className="tree-node-leaf">
          <p>{this.props.data.url}</p>

          {types.map(type => (
            <a data-id={this.props.data.name}>
              {ext == type ? (
                <h6>{this.props.data.name}</h6>
              ) : //  <Image
              //   width={130}
              //   src={`${url}/${this.props.data.url}`}
              //   responsive
              // />
              null}
            </a>
          ))}
        </div>
      );
    }
  }
}

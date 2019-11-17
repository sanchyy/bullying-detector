import React, { Component } from "react";

import { Sigma } from "react-sigma";
import SigmaLoader from "./Loader";
import NodeShapes from "./NodeShapes";

import api from "../../api/axios";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphData: { nodes: [], edges: [] },
      settings: {
        batchEdgesDrawing: true,
        drawEdges: true,
        drawLabels: true,
        drawEdgeLabels: true,
        hideEdgesOnMove: false,
        animationsTime: 3000,
        clone: false,
        doubleClickEnabled: true,
        mouseWheelEnabled: true,
        minNodeSize: 1,
        maxNodeSize: 20,
        minArrowSize: 2,
        minEdgeSize: 0.5,
        maxEdgeSize: 2,
        defaultNodeBorderColor: "#000",
        defaultHoverLabelBGColor: "transparent",
        labelHoverColor: "transparent",
        defaultLabelSize: 16,
        autoRescale: true
      },
      style: {
        maxWidth: "1200px",
        height: "600px"
      }
    };
  }

  componentWillMount() {
    /*api.get("/getGraph").then(resp => {console.log(resp)}).catch(error => {if (error.response) {
            console.log(error.response);
          }})*/

    const test = {"nodes": [{"id": 7, "label": "Andreu", "color": "#000", "x":0,"y":0, "size": 280},{"id": 8, "label": "Elena", "color": "#700", "x":1,"y":0, "size": 320},{"id": 9, "label": "Joan", "color": "#700", "x":2,"y":0, "size": 320},{"id": 10, "label": "David", "color": "#000", "x":3,"y":0, "size": 340},{"id": 11, "label": "Sanchy", "color": "#0F0", "x":0,"y":1, "size": 380},{"id": 12, "label": "Carlota", "color": "#060", "x":1,"y":1, "size": 420},{"id": 13, "label": "Bernat", "color": "#700", "x":2,"y":1, "size": 400}],"edges": [{"id": 0, "source": 9, "target": 7, "type": "curvedArrow", "size": 2},{"id": 1, "source": 11, "target": 7, "type": "curvedArrow", "size": 2},{"id": 2, "source": 12, "target": 7, "type": "curvedArrow", "size": 2},{"id": 3, "source": 13, "target": 7, "type": "curvedArrow", "size": 2},{"id": 4, "source": 7, "target": 8, "type": "curvedArrow", "size": 2},{"id": 5, "source": 10, "target": 8, "type": "curvedArrow", "size": 2},{"id": 6, "source": 12, "target": 8, "type": "curvedArrow", "size": 2},{"id": 7, "source": 8, "target": 9, "type": "curvedArrow", "size": 2},{"id": 8, "source": 11, "target": 9, "type": "curvedArrow", "size": 2},{"id": 9, "source": 13, "target": 9, "type": "curvedArrow", "size": 2},{"id": 10, "source": 7, "target": 10, "type": "curvedArrow", "size": 2},{"id": 11, "source": 10, "target": 10, "type": "curvedArrow", "size": 2},{"id": 12, "source": 9, "target": 11, "type": "curvedArrow", "size": 2},{"id": 13, "source": 10, "target": 11, "type": "curvedArrow", "size": 2},{"id": 14, "source": 12, "target": 11, "type": "curvedArrow", "size": 2},{"id": 15, "source": 13, "target": 11, "type": "curvedArrow", "size": 2},{"id": 16, "source": 7, "target": 12, "type": "curvedArrow", "size": 2},{"id": 17, "source": 8, "target": 12, "type": "curvedArrow", "size": 2},{"id": 18, "source": 13, "target": 12, "type": "curvedArrow", "size": 2},{"id": 19, "source": 8, "target": 13, "type": "curvedArrow", "size": 2},{"id": 20, "source": 12, "target": 13, "type": "curvedArrow", "size": 2}]};
    this.setState({ graphData: test });
  }

  render() {
    return (
      <div className="App">
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: 30,
            marginTop: 20
          }}
        >
          DEPENDENCY GRAPH
        </h1>
        <Sigma
          renderer="canvas"
          settings={this.state.settings}
          style={this.state.style}
        >
          <SigmaLoader graph={this.state.graphData}>
            <NodeShapes defult="cross" />
          </SigmaLoader>
        </Sigma>
      </div>
    );
  }
}

export default Graph;

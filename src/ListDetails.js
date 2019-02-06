import React, { Component } from "react";
import { LineChart } from 'react-charts-d3';

const chartdata = [
    { key: 'Group 1', values: [ { x: 'A', y: 23 }, { x: 'B', y: 8 } ] },
    { key: 'Group 2', values: [ { x: 'A', y: 15 }, { x: 'B', y: 37 } ] },
  ];


class ListDetails extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="ListDetails">
        <ul>
          {[...data].map(id => (
            <li key={id}>{id}</li>
          ))}
        </ul>

        <LineChart data={chartdata} />
      </div>
    );
  }
}

export default ListDetails;

import React, { Component } from "react";
import { LineChart } from 'react-charts-d3';
import {StripedList, ListItem} from './components';

const chartdata = [
    { key: 'Group 1', values: [ { x: 'A', y: 23 }, { x: 'B', y: 8 } ] },
    { key: 'Group 2', values: [ { x: 'A', y: 15 }, { x: 'B', y: 37 } ] },
  ];


class ListDetails extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="ListDetails">
        <StripedList>
          {[...data].map(id => (
            <ListItem key={id}><i className="fas fa-ice-cream"/>{id}</ListItem>
          ))}
        </StripedList>

        <LineChart data={chartdata} />
      </div>
    );
  }
}

export default ListDetails;

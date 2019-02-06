import React, { Component } from "react";
import "./App.css";
import NewWindow from "./NewWindow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedDataIds: new Set(),
      externalWindowIds: new Set()
    };
    this.incrementedId = 0;
  }

  openWindow = () => {
    const id = new Date().getTime();
    const { externalWindowIds } = this.state;
    externalWindowIds.add(id);
    this.setState({
      externalWindowIds
    });
  }

  handleCloseWindow = id => {
    console.log(`Closing window with id ${id}`);
    const { externalWindowIds } = this.state;
    externalWindowIds.delete(id);
    this.setState({ 
      externalWindowIds 
    });
  }

  getWindows = () => {
    const externalWindows = [...this.state.externalWindowIds].map(
      id => (
        <NewWindow
          key={id}
          id={id}
          onClose={this.handleCloseWindow}
          data={this.state.selectedDataIds}
        />
      )
    );
    console.log("Number of open windows: ", externalWindows.length);
    return externalWindows;
  }

  addData = () => {
    this.incrementedId = this.incrementedId + 1;
    this.setState({
      data: [...this.state.data, { id: this.incrementedId, name: `Name no ${this.incrementedId}` }]
    });
  }

  toggleSelectedData = e => {
    const id = e.target.value;
    const {selectedDataIds} = this.state;
    if (e.target.checked) {
      selectedDataIds.add(id);
      this.setState({selectedDataIds});
    } 
    if (!e.target.checked) {
      selectedDataIds.delete(id);
      this.setState({selectedDataIds});
    }
  }

  render() {
    return (
      <div>
        <main>
          <button onClick={this.openWindow}>
            click to open new window that updates with data
          </button>
          <button onClick={this.addData}>add data</button>

          <div>
            {this.state.data.map(item => (
              <label
                htmlFor={`data_${item.id}`}
                key={`data_${item.id}`}
                className="data-option"
              >
                <input
                  type="checkbox"
                  id={`data_${item.id}`}
                  onChange={this.toggleSelectedData}
                  value={item.id}
                />
                <span>{item.name}</span>
              </label>
            ))}
          </div>
        </main>
        {this.getWindows()}
      </div>
    );
  }
}

export default App;

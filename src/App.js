import React from 'react';
import Tooltip from './Tooltip';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showTooltip: false,
      tooltipPosition: 'top'
    }
  }

  // ********************** Mouse hover function **********************
  onMouseEnter = () => {
    this.setState({
      showTooltip: true
    })
  }

  //*************************Mouse Leave Function *******************/
  onMouseLeave = () => {
    this.setState({
      showTooltip: false
    })
  }

  //************************Set Tooltip Position  ********************/
  handleChange = (e) => {
    this.setState({
      tooltipPosition: e.target.value
    })
  }

  render() {
    const { tooltipPosition, showTooltip } = this.state;
    console.log("tooltipPosition "  +  tooltipPosition);

    return (
      <div>
        <label>
          Set Tooltip Position: 

          <select value={tooltipPosition} onChange={this.handleChange}>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </label>

        <div>
          <button id="btn" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Hover</button>
          {(showTooltip && <Tooltip props = {tooltipPosition} />)}
        </div>
      </div>
    )

  }

}

export default App;

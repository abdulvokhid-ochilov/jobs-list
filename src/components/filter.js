import React from "react";

class Filter extends React.Component {
  render() {
    const len = this.props.filters.length;
    return len > 0 ? (
      <div className="filters-container">
        <div className="filters">
          {this.props.filters.map((filter, index) => (
            <div key={index}>
              <h2>{filter}</h2>
              <button
                className=""
                onClick={() => this.props.removeFilter(filter)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <button className="clear" onClick={this.props.clearFilter}>
          Clear
        </button>
      </div>
    ) : null;
  }
}

export default Filter;

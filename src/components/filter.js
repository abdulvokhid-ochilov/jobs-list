import React from "react";

class Filter extends React.Component {
  render() {
    return (
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
        <button className="" onClick={this.props.clearFilter}>
          Clear
        </button>
      </div>
    );
  }
}

export default Filter;

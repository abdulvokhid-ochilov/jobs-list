import React from "react";

class Filter extends React.Component {
  render() {
    const len = this.props.filters.length;
    return len > 0 ? (
      <div className="filters-container">
        <div className="filters-wrapper">
          <div className="filters">
            {this.props.filters.map((filter, index) => (
              <div key={index} className="filter-tag">
                <span className="filter-name">{filter}</span>
                <span
                  className="filter-button"
                  onClick={() => this.props.removeFilter(filter)}
                >
                  X
                </span>
              </div>
            ))}
          </div>
          <button className="clear" onClick={this.props.clearFilter}>
            Clear
          </button>
        </div>
      </div>
    ) : null;
  }
}

export default Filter;

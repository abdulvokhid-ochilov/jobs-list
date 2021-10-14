import React, { useState } from "react";
import Header from "./components/header";
import Filter from "./components/filter";
import Jobs from "./components/jobs";
import data from "./data/data.json";

function App() {
  const [filters, setFilter] = useState([]);

  const addFilter = (filter) => {
    setFilter([...filters, filter]);
  };

  const clearFilter = () => {
    setFilter([]);
  };

  const removeFilter = (x) => {
    setFilter(filters.filter((tag) => tag !== x));
  };

  return (
    <div className="App">
      <Header />
      <Filter
        clearFilter={clearFilter}
        removeFilter={removeFilter}
        filters={filters}
      />
      <Jobs data={data} filter={filters} addFilter={addFilter} />
    </div>
  );
}

export default App;

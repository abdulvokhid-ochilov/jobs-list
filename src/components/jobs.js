import React from "react";

class Jobs extends React.Component {
  render() {
    const filtered_jobs = this.props.data.filter((job) => {
      let counter = 0;
      for (let i = 0; i < this.props.filter.length; i++) {
        let tag = this.props.filter[i];
        let tags = [...job.languages, ...job.tools, job.role, job.level];
        if (tags.includes(tag)) counter++;
      }
      if (counter === this.props.filter.length) return job;
    });

    return (
      <div className="jobs-container">
        {filtered_jobs.map((job) => (
          <div className="job" key={job.id}>
            <div className="job-logo">
              <img src={job.logo} alt={job.company} />
            </div>
            <div className="job-details">
              <h2>{job.company}</h2>
              <h1>{job.position}</h1>
              <p>
                <span>{job.postedAt}</span>
                <span>{job.contract}</span>
                <span>{job.location}</span>
              </p>
            </div>
            <div className="job-tags">
              {[...job.languages, ...job.tools, job.role, job.level].map(
                (tag, index) => {
                  return (
                    <button
                      onClick={() => this.props.addFilter(tag)}
                      className="job-tag"
                      key={index}
                    >
                      {tag}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Jobs;

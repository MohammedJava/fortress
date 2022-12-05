import React, { useState } from "react";
import "./Volunteer.css";

const Introduction = () => {
  const [garbageCollection, setGarbageCollection] = useState(false);
  const [shelterMaintenance, setShelterMaintenance] = useState(false);
  const [goodsDistribution, setGoodsDistribution] = useState(false);
  const [jobs, setJobs] = useState([
    {
      id: 0,
      type: "Garbage Collection",
      summary: "Collect Garbage of City Hall",
      description: "City Hall is full of trash, let's clean them up.",
      location: "12345, St-Catherine Street",
      startTime: "20-Dec-2022 2:00PM",
      endTime: "20-Dec-2022 9:00PM",
      positionLeft: 1,
      hasApplied: false,
    },
    {
      id: 1,
      type: "Garbage Collection",
      summary: "Collect Garbage of St-Laurent River",
      description: "St-Laurent River is full of trash, let's clean them up.",
      location: "54321, St-Catherine Street",
      startTime: "25-Dec-2022 1:00PM",
      endTime: "26-Dec-2022 2:00PM",
      positionLeft: 3,
      hasApplied: false,
    },
    {
      id: 2,
      type: "Shelter Maintenance",
      summary: "Shelter of Boul. Angrignon has collapsed",
      description:
        "Shelter of Boul. Angrignon has collapsed, here is a scotch tape, fix it.",
      location: "1122, Boul. Angrignon",
      startTime: "1-Jan-2023 1:00PM",
      endTime: "1-Jan-2023 2:00PM",
      positionLeft: 5,
      hasApplied: false,
    },
    {
      id: 3,
      type: "Shelter Maintenance",
      summary: "Shelter of Boul. Newman has rebelled",
      description:
        "Shelter of Boul. Newman has rebelled, here is a spaghetti, crush them.",
      location: "2211, Boul. Newman",
      startTime: "15-Dec-2022 1:00PM",
      endTime: "16-Dec-2022 2:00PM",
      positionLeft: 2,
      hasApplied: false,
    },
    {
      id: 4,
      type: "Goods Distribution",
      summary: "Distributing Gloves",
      description:
        "Winter is coming, our fighters needs gloves to defeat the Night King.",
      location: "1234, Boul. Mont-Royal",
      startTime: "20-Dec-2022 1:00PM",
      endTime: "20-Dec-2022 2:00PM",
      positionLeft: 100,
      hasApplied: false,
    },
    {
      id: 5,
      type: "Goods Distribution",
      summary: "Distributing Taco",
      description:
        "Winter is coming, our fighters needs foods to defeat the Night King.",
      location: "4321, Boul. Mont-Royal",
      startTime: "21-Dec-2022 1:00PM",
      endTime: "21-Dec-2022 2:00PM",
      positionLeft: 1,
      hasApplied: false,
    },
  ]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const updateDisplayedJobs = () => {
    setDisplayedJobs([]);
    const selectedTypes = [];
    if (garbageCollection) {
      selectedTypes.push("Garbage Collection");
    }
    if (shelterMaintenance) {
      selectedTypes.push("Shelter Maintenance");
    }
    if (goodsDistribution) {
      selectedTypes.push("Goods Distribution");
    }
    setDisplayedJobs(jobs.filter((job) => selectedTypes.includes(job.type)));
  };
  const selectVolunteerType = (e) => {
    e.preventDefault();
    console.log("Submitted");
    updateDisplayedJobs();
  };
  const applyForAJob = (id) => {
    console.log("there");
    setJobs(
      jobs.map((job) => (job.id === id ? { ...job, hasApplied: true } : job))
    );
    console.log("where");
    updateDisplayedJobs();
    console.log("how");
    console.log(displayedJobs);
  };
  const unApplyAJob = (id) => {
    setJobs(
      jobs.map((job) => (job.id === id ? { ...job, hasApplied: false } : job))
    );
    updateDisplayedJobs();
  };
  return (
    <div className="Volunteer" id="Volunteer" name="Volunteer">
      <div className="content">
        <div className="inner">
          <div className="title">Volunteer</div>
          <div className="subtitle">Currently Available Volunteer Position</div>
          <form className="" onSubmit={selectVolunteerType}>
            <div id="custom-grid">
              <label htmlFor="input-garbage-collection" className="labelStyle">
                Garbage Collection
                <input
                  type="checkbox"
                  id="input-garbage-collection"
                  value={garbageCollection}
                  onChange={(e) =>
                    setGarbageCollection(e.currentTarget.checked)
                  }
                />
              </label>
              <label htmlFor="input-shelter-maintenance" className="labelStyle">
                Shelter Maintenance
                <input
                  type="checkbox"
                  id="input-shelter-maintenance"
                  value={shelterMaintenance}
                  onChange={(e) =>
                    setShelterMaintenance(e.currentTarget.checked)
                  }
                />
              </label>
              <label htmlFor="input-goods-distribution" className="labelStyle">
                Goods Distribution
                <input
                  type="checkbox"
                  id="input-goods-distribution"
                  value={goodsDistribution}
                  onChange={(e) =>
                    setGoodsDistribution(e.currentTarget.checked)
                  }
                />
              </label>
            </div>
            <div id="glass-btn">
              <button type="submit">Search</button>
            </div>
          </form>
          <div>
            {displayedJobs.map((job) => {
              console.log(job);
              return (
                <div key={job.id}>
                  <h5>{job.summary}</h5>
                  <p>{job.description}</p>
                  <p>
                    {job.location}
                    {" From "} {job.startTime}
                    {" To "} {job.endTime}
                    {" Position Left: "} {job.positionLeft}
                  </p>
                  <button
                    type="submit"
                    value={job.id}
                    onClick={() => {
                      console.log("here");
                      if (job.hasApplied) {
                        unApplyAJob(job.id);
                      } else {
                        applyForAJob(job.id);
                      }
                    }}
                  >
                    {job.hasApplied ? "Un-apply" : "Apply"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

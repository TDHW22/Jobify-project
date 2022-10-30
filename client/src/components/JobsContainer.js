import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    numberOfPages,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
  } = useAppContext();

  useEffect(() => {
    getJobs();
    //eslint-disable-next-line
  }, [search, searchStatus, searchType, sort, page]);
  if (isLoading) {
    return (
      <div>
        <Loading center />
      </div>
    );
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs To Display!</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>

      {numberOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;

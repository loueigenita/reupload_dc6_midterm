/* eslint-disable react/react-in-jsx-scope */
import React,{ useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VenueSchedule = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setTimeout(()=> {
      fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => {
        if(!res.ok){
          throw Error('Failed to Reload Data, Fetching Stopped...');
        }
        return res.json()
      })
      .then((data) => {
        const { venue } = data;
        setVenue(venue);
        setSchedule(data.schedules);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
        setSchedule(false);
      })
    }, 1000)
  }, []);

  return (
    <div className="card bg-light" style={{height:"80vh"}}>
        <div className="card-header bg-dark">
          <h3 className="text-center m-1 text-light">
            {schedule ? "S C H E D U L E S": "No Schedule Available"}
            <div className="mt-3 text-warning">{venue.building}</div>
          </h3>
        </div>
        <div className="card-body" style={{height:"70vh", overflow:"auto",
                }}>
          <table className="table table-striped table-bordered shadow">
            <thead className="thead-dark">
              <tr>
              <th scope="col">ID</th>
                <th scope="col">COURSE #</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">TEACHER</th>
                <th scope="col">SIZE</th>
                <th scope="col">SCHEDULE</th>
              </tr>
            </thead>
          
            <tbody>
            {Object.keys(schedule)?.map((sched, index) => {
                return (
                  <tr key={index}>
                     <td>{schedule[sched].id}</td>
                    <td>{schedule[sched].course_no}</td>
                    <td>{schedule[sched].description}</td>
                    <td>{schedule[sched].teacher}</td>
                    <td>{schedule[sched].size}</td>
                    <td>{schedule[sched].schedule}</td>
                  </tr>
                );
                })}
            
            </tbody>
          </table>

            { error && 
                  <div className="text-danger text-center">
                  <strong>{error}</strong>
                  </div>
              }
            { isPending && 
            <div className="text-success text-center">
                <strong>Loading Available Data...</strong> 
            </div>
            }

          </div>
          <div className="card-footer">
          <Link to="/" className="btn btn-outline-primary btn-m">
            Back
          </Link>
          </div>
        </div>
  );
};

export default VenueSchedule;
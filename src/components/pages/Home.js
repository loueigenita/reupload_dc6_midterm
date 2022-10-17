import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
const [data, setData] = useState([]);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    setTimeout(()=> {
        fetch("https://sis.materdeicollege.com/api/venues")
        .then((res) => {
            if(!res.ok){
                throw Error('Failed to Reload Data, Fetching Stopped...');
            }
            return res.json()
    })
        .then((data) => {
            const { venues } = data;
            setData(venues);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
            setData(false);
        })
    },1000)
}, []);
return (
  <div className="container text-center"style={{height:"80vh", overflow:"auto"}}>
    <div className="py-4">
      <h1 className="card bg-primary text-light text-center  shadow">MDC BUILDING VENUES</h1>
      <table className="table table-bordered shadow table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">BUILDING</th>
            <th scope="col">CAPACITY</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(data)?.map((venue, index) => {
                  return (
                  <tr key={index}>
                      <td>{data[venue].id}</td>
                      <td>{data[venue].name}</td>
                      <td>{data[venue].building}</td>
                      <td>{data[venue].capacity}</td>
                      <td><Link className="btn btn-sm btn-outline-primary" to={`/venues/${data[venue].id}`}>
                    View
                  </Link></td>
                          
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
      </div>
  );
}
 
export default Home;
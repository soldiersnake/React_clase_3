import React, {useState, useEffect} from 'react';
import fetchData from './fetchData' 
import './style.css';

function Loading() {
  const [data, setData] = useState( { status: "loading"} ) // editar 

  useEffect(() => {

    fetchData()
      .then( (response) => {
        setData(response)
      })
  }, [])

  return (
    <div style={{margin: "35px auto", textAlign: "center"}}>
      Status: <strong>{ data.status }</strong>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Loading/>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LeagueDetails = () => {
   const {id} = useParams()
  const [league,setLeagues] = useState ([]);

  useEffect(()=>{
      const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.teams[0]))
  },[id])
    return (
        <div>
            <h1>This is team details</h1>
            <h1>{league.strTeam}</h1>
            <h1>{league.strCountry}</h1>
            <h1>{league.strGender}</h1>
        </div>
    );
};

export default LeagueDetails;
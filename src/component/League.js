import React, { useEffect, useState } from 'react';
import DisplayLeague from './DisplayLeague';
import LeagueDetails from './LeagueDetails';

const League = () => {
    const [leagues,setLeagues]= useState([])
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setLeagues(data.teams))
    },[])
    return (
        <div>
            {
                leagues.map(league => <DisplayLeague league={league}></DisplayLeague>)
            }
        </div>
    );
};

export default League;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Team = () => {
    const {id} = useParams();
    const [teams, setTeams] =useState({});
    useEffect(()=>{
            const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
            fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams[0]))
    },[id])

    return (
        <div>
            <div>

            </div>
        <div>
            <div>
            <img src={teams.strTeamBanner} alt=""/>
            <h1>{teams.strTeam}</h1>
            <h2>{teams.strLeague}</h2>
            <h3>{teams.strSport}</h3>
            <h3>{teams.strGender}</h3>
            </div>
            <div>
            <img src="" alt=""/>
            </div>
        </div>
        <div>
            <p>{teams.strDescriptionEN}</p>
        </div>
        </div>
    );
};

export default Team;
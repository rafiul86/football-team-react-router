import React from 'react';
import { useHistory } from 'react-router';

const DisplayLeague = (props) => {
    const {strTeam,strLeague,strSport,idTeam,strTeamBanner,strGender} = props.league;
    const history = useHistory();
    const clickHandle = idTeam =>{
        const url = `${idTeam}`;
        history.push(url)
    }
    return (
        <div>
            
            <img src={strTeamBanner}alt=""/>
            <h1>{strTeam}</h1>
            <p>{strSport}</p>
            <p>{idTeam}</p>
            <button onClick = {()=>clickHandle(idTeam)}>Details</button>
        </div>
    );
};

export default DisplayLeague;
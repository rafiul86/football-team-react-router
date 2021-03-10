import React from 'react';
import { useHistory } from 'react-router';
import {Button} from 'react-bootstrap';
const LeagueDetails = (props) => {
    const {idTeam,strCountry,strTeamBadge,strLeague} = props.league;
    const history = useHistory();
    const handleClick = idTeam =>{
        const url = `/${idTeam}`;
        history.push(url)
    }
    return (
        <div>
            <img src ={strTeamBadge} alt=""/>
            <h1>{strCountry}</h1>
            <h2>{strLeague}</h2>
                <Button btn-color ="primary" onClick = {()=>handleClick(idTeam)} > Explore </Button>
        </div>
    );
};

export default LeagueDetails;
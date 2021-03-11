import React, { useEffect, useState } from "react";
import LeagueDetails from "./LeagueDetails";
import { Container } from "react-bootstrap";
import image from "./../stadium.jpg";
import './League.css'

const League = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setLeagues(data.teams));
  }, []);
  
  return (
    <Container fluid>
      <header><img src={image} alt="" /></header>
      <div className = "design">{leagues.map((league) => (
        <LeagueDetails league={league}></LeagueDetails>
      ))}</div>
      
    </Container>
  );
};

export default League;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Container } from "react-bootstrap";
import image from "./../male.png";
import './Team.css'

const Team = () => {
  const { id } = useParams();
  const [teams, setTeams] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams[0]));
  }, [id]);
  

  return (
      <Container fluid>
    <div >
      <Card className="text-center back-design">
        <Card.Body>
          <Card.Title>PIONEER OF THE LEGEND</Card.Title>
          <img className = "logo-design" src={teams.strTeamLogo} alt="" />
        </Card.Body>
      </Card>
      {/* <Jumbotron>
        <img 
         src={teams.strTeamBanner} alt=""/>
      </Jumbotron> */}
      <div style = {{backgroundColor : "grey"}}>
        <div></div>
        <div style = {{backgroundColor : "goldenrod"}} className="text-center d-flex" >
          <div>
            <h3>{teams.strLeague}</h3>
            <h5>Sport type : {teams.strSport}</h5>
            <h5>Gender : {teams.strGender}</h5>
            <h5>Country : {teams.strCountry}</h5>
            <p>Formed : {teams.intFormedYear}</p>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
        <div>
          <p>{teams.strDescriptionEN}</p>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Team;

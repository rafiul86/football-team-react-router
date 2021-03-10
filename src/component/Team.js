import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Jumbotron, Card, Container } from "react-bootstrap";

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
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>PIONEER OF THE LEGEND</Card.Title>
          <img src={teams.strTeamBanner} alt="" />
        </Card.Body>
      </Card>
      {/* <Jumbotron>
        <img 
         src={teams.strTeamBanner} alt=""/>
      </Jumbotron> */}
      <div style = {{backgroundColor : "grey"}}>
        <div></div>
        <div className="text-center" >
          <div>
            <h1>{teams.strTeam}</h1>
            <h2>{teams.strLeague}</h2>
            <h3>{teams.strSport}</h3>
            <h3>{teams.strGender}</h3>
          </div>
          <div>
            <img src="" alt="" />
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

import React from "react";
import { useHistory } from "react-router";
import { Button, Container, Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const LeagueDetails = (props) => {
  const { idTeam, strCountry, strTeamBadge,strTeam, strLeague } = props.league;
  const history = useHistory();
  const handleClick = (idTeam) => {
    const url = `/${idTeam}`;
    history.push(url);
  };
  return (
    <Container  fluid>
      <Row >
        <Col>
          <Card className="text-center" style={{ width: "18rem" }}>
            <Card.Img variant="top" style = {{margin : "50px",height : "180px", width : " 180px",align : "center"}} src={strTeamBadge} />
            <Card.Body>
              <Card.Title>{strCountry}</Card.Title>
              <Card.Text>{strLeague}</Card.Text>
              <Card.Text>{strTeam}</Card.Text>
              <Button btn-color="primary" onClick={() => handleClick(idTeam)}>
                {" "}
                Explore ->{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    // <Container fluid>
    // <img src ={strTeamBadge} alt=""/>
    // <h1>{strCountry}</h1>
    // <h2>{strLeague}</h2>
    // <Button btn-color ="primary" onClick = {()=>handleClick(idTeam)} > Explore </Button>
    // </Container>
  );
};

export default LeagueDetails;

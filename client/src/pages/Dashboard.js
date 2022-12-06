import React from "react";
import { Header, Card, Container } from "semantic-ui-react";
import TeamSkillsChart from "../components/charts/TeamSkillsChart";
import TeamResponsibilitiesChart from "../components/charts/TeamResponsibilitiesChart";
import TeamPersonalInterestsChart from "../components/charts/TeamPersonalInterestsChart";
import UpcomingDates from "../components/UpcomingDates";

const Dashboard = () => {
  return (
    <>
      <h1 className="dashboard">Dashboard</h1>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Skills</Card.Header>
          </Card.Content>
          <Card.Content>
            <TeamSkillsChart />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Responsibilities</Card.Header>
          </Card.Content>
          <Card.Content>
            <TeamResponsibilitiesChart />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Personal Interests</Card.Header>
          </Card.Content>
          <Card.Content>
            <TeamPersonalInterestsChart />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Upcoming Dates</Card.Header>
          </Card.Content>
          <Card.Content>
            <UpcomingDates />
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
};

export default Dashboard;

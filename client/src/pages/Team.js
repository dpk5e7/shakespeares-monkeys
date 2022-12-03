import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MY_TEAM } from "../utils/queries";
import { DELETE_TEAM_MEMBER } from "../utils/mutations";
import TeamMemberCard from "../components/TeamMemberCard";
import { Card, Button, Icon, Divider } from "semantic-ui-react";

const Team = () => {
  const [deleteTeamMember] = useMutation(DELETE_TEAM_MEMBER);

  const { loading, error, data, refetch } = useQuery(GET_MY_TEAM);
  const teamData = data?.team || [];

  const handleDeleteTeamMember = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      const data = await deleteTeamMember({
        variables: { id },
      });
      refetch();
    }
  };

  return (
    <>
      <h2>My Team</h2>
      <Link to="/AddTeamMember">
        <Button compact positive icon>
          <Icon name="add" />
          New Team Member
        </Button>
      </Link>
      <Link to="/printTeam">
        <Button compact icon as="a" href="/printTeam">
          <Icon name="print" />
          Print Entire Team
        </Button>
      </Link>
      <Divider />
      <Card.Group>
        {teamData.map((teamMember) => (
          <TeamMemberCard
            id={teamMember._id}
            name={teamMember.name}
            email={teamMember.contactInfo.email}
            phoneNumber={teamMember.contactInfo.phoneNumber}
            deleteTeamMember={handleDeleteTeamMember}
          />
        ))}
      </Card.Group>
    </>
  );
};

export default Team;

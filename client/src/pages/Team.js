import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MY_TEAM } from "../utils/queries";
import { DELETE_TEAM_MEMBER } from "../utils/mutations";
import TeamMemberCard from "../components/TeamMemberCard";
import { Card, Button, Icon } from "semantic-ui-react";

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
      <Button compact positive icon as="a" href="/TeamMember">
        <Icon name="add" />
        New Team Member
      </Button>
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

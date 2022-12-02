import { useNavigate } from "react-router-dom";
import { Card, Button, Icon } from "semantic-ui-react";

// Component to display individual team members on the team page
export default function TeamMemberCard({
  id,
  name,
  email,
  phoneNumber,
  deleteTeamMember,
}) {
  const editLink = `/editTeamMember/${id}`;
  const exportLink = `/oneTeamMember/${id}`;

  const navigate = useNavigate();

  return (
    <Card key={id}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>Email: {email}</Card.Description>
        <Card.Description>Phone Number: {phoneNumber}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui three buttons">
            <Button compact primary icon onClick={() => navigate(editLink)}>
              <Icon name="edit outline" />
            </Button>
            <Button compact icon onClick={() => navigate(exportLink)}>
              <Icon name="print" />
            </Button>
          <Button
            compact
            negative
            icon
            onClick={() => deleteTeamMember(id, name)}
          >
            <Icon name="trash alternate outline" />
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

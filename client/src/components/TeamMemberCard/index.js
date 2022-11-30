import { Card, Button, Icon } from "semantic-ui-react";

// Component to display individual team members on the team page
export default function TeamMemberCard({ id, name, email, phoneNumber, deleteTeamMember }) {

  const editLink = `/TeamMember/${id}`;

  return (
    <Card key={id}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{id}</Card.Meta>
        <Card.Description>Email: {email}</Card.Description>
        <Card.Description>Phone Number: {phoneNumber}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button compact primary icon as="a" href={editLink}>
            <Icon name="edit outline" />
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

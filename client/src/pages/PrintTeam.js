import { useQuery } from "@apollo/client";
import { GET_MY_TEAM } from "../utils/queries";
import TeamMemberTable from "../components/TeamMemberTable";
import { Table } from "semantic-ui-react";
import { Icon, Button } from "semantic-ui-react";

const PrintTeam = () => {

  const print = () => {
    window.print()
}
  const { loading, error, data } = useQuery(GET_MY_TEAM);
  const teamData = data?.team || [];
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div><Button onClick={print} size="large">
                <Icon name="print" />
                Print Team
            </Button></div>
        <Table>
          {teamData.map((teamMember) => (
            <TeamMemberTable
              id={teamMember._id}
              name={teamMember.name}
              email={teamMember.contactInfo.email}
              phoneNumber={teamMember.contactInfo.phoneNumber}
              emergencyPOCName={teamMember.emergencyPOC.name}
              emergencyPOCRelationship={teamMember.emergencyPOC.relationship}
              emergencyPOCPhoneNumber={teamMember.emergencyPOC.phoneNumber}
              skills={teamMember.skills}
              responsibilities={teamMember.responsibilities}
              experience={teamMember.experience}
              training={teamMember.training}
              mailingAddress={teamMember.contactInfo.mailingAddress}
              familySituation={teamMember.familySituation}
              importantDates={teamMember.importantDates.importantDate}
              importantDatesDescription={teamMember.importantDates.description}
            />
          ))}
        </Table>
    </>
  );
}

export default PrintTeam



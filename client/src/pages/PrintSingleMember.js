import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ONE_TEAM_MEMBER } from "../utils/queries";
import { Table } from "semantic-ui-react";
import OneMemberTable from "../components/OneMemberTable";
import { Button, Icon } from "semantic-ui-react"

const PrintSingleMember = () => {
  const print = () => {
    window.print()
  }
  // const { id } variable must match the route in App.js
  const { id } = useParams();
  const { loading, data } = useQuery(GET_ONE_TEAM_MEMBER, {
    variables: { oneTeamMemberId: id },
  });

  const oneTeamMember = data?.oneTeamMember || { email: "none" };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div><Button onClick={print} size="large">
                <Icon name="print" />
                Print
            </Button></div>
      <Table>
        <OneMemberTable
          id={oneTeamMember.id}
          name={oneTeamMember.name}
          email={oneTeamMember.contactInfo.email}
          phoneNumber={oneTeamMember.contactInfo.phoneNumber}
          mailingAddress={oneTeamMember.contactInfo.mailingAddress}
          emergencyPOCName={oneTeamMember.emergencyPOC.name}
          emergencyPOCRelationship={oneTeamMember.emergencyPOC.relationship}
          emergencyPOCPhoneNumber={oneTeamMember.emergencyPOC.phoneNumber}
          skills={oneTeamMember.skills}
          responsibilities={oneTeamMember.responsibilities}
          experience={oneTeamMember.experience}
          training={oneTeamMember.training}
          familySituation={oneTeamMember.familySituation}
          importantDates={oneTeamMember.importantDates}
          personalInterests={oneTeamMember.personalInterests}
          notes={oneTeamMember.notes}
        />
      </Table>
    </>
  );
};
export default PrintSingleMember;

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ONE_TEAM_MEMBER } from "../utils/queries";
// import TeamMemberTable from "../components/TeamMemberTable";
import { Table } from "semantic-ui-react";
import OneMemberTable from "../components/OneMemberTable";
// import UpcomingDates from "../components/UpcomingDates";


const PrintSingleMember = () => {
  // const { id } variable must match the route in App.js
  const { id } = useParams();
  const { loading, data } = useQuery(GET_ONE_TEAM_MEMBER, {
    variables: {oneTeamMemberId: id },
  });

  const oneTeamMember = data?.oneTeamMember || {"email": "none" };
if (loading) {
  return <div>Loading...</div>;
}
console.log("oneTM", oneTeamMember)
  return (
    <>
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
        importantDates={oneTeamMember.importantDates.importantDate}
        importantDatesDescription={oneTeamMember.importantDates.description}
        personalInterests={oneTeamMember.personalInterests}
        notes={oneTeamMember.notes}



        />
      
    </Table>
    </>
)}
export default PrintSingleMember;



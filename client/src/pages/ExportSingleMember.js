import { useQuery } from "@apollo/client";
import { GET_ONE_TEAM_MEMBER } from "../utils/queries";
// import TeamMemberTable from "../components/TeamMemberTable";
import { Table } from "semantic-ui-react";
import OneMemberTable from "../components/OneMemberTable";
// import UpcomingDates from "../components/UpcomingDates";


const ExportSingleMember = () => {
  const { loading, error, data } = useQuery(GET_ONE_TEAM_MEMBER);
  const teamMember = data?.oneTeamMember || [];


  return (
    <>
    <Table>
      {/* {teamMember.find(( otm ) => ( */}
        <OneMemberTable 
        id={teamMember._id}
        name={teamMember.name}
        // email={teamMember.contactInfo.email}
        // phoneNumber={teamMember.contactInfo.phoneNumber}
        // emergencyPOCName={teamMember.emergencyPOC.name}
        // emergencyPOCRelationship={otm.emergencyPOC.relationship}
        // emergencyPOCPhoneNumber={otm.emergencyPOC.phoneNumber}
        // skills={otm.skills}
        // responsibilities={otm.responsibilities}
        // experience={otm.experience}
        // training={otm.training}
        // mailingAddress={otm.contactInfo.mailingAddress}
        // familySituation={otm.familySituation}
        // importantDates={otm.importantDates.importantDate}
        // importantDatesDescription={otm.importantDates.description}
        />
    {/* ))}; */}
      
    </Table>
    </>
)}
export default ExportSingleMember;



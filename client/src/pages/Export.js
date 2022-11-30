import { useQuery, useMutation } from "@apollo/client";
import { GET_MY_TEAM } from "../utils/queries";
import TeamMemberTable from "../components/TeamMemberTable";
import { Table } from "semantic-ui-react";


const Export = () => {
  const { loading, error, data } = useQuery(GET_MY_TEAM);
  const teamData = data?.team || [];


  return (
    <>
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
        />
      ))}
    </Table>
    </>
  )
}

export default Export



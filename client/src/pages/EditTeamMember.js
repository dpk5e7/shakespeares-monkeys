import React from "react";
import { useParams } from "react-router-dom";

import EditTeamMemberForm from "../components/EditTeamMemberForm";

// add apollo graphql
import { useQuery } from "@apollo/client";
import { GET_ONE_TEAM_MEMBER } from "../utils/queries";

const EditTeamMember = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_ONE_TEAM_MEMBER, {
    // pass URL parameter
    variables: { oneTeamMemberId: id },
  });

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <EditTeamMemberForm
          id={id}
          name={data.oneTeamMember.name}
          email={data.oneTeamMember.contactInfo.email}
          phoneNumber={data.oneTeamMember.contactInfo.phoneNumber}
          mailingAddress={data.oneTeamMember.contactInfo.mailingAddress}
          pocName={data.oneTeamMember.emergencyPOC.name}
          pocPhoneNumber={data.oneTeamMember.emergencyPOC.phoneNumber}
          pocRelationship={data.oneTeamMember.emergencyPOC.relationship}
          familySituation={data.oneTeamMember.familySituation}
          notes={data.oneTeamMember.notes}
          skills={data.oneTeamMember.skills}
          responsibilities={data.oneTeamMember.responsibilities}
          personalInterests={data.oneTeamMember.personalInterests}
        />
      )}
    </>
  );
};

export default EditTeamMember;

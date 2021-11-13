import React from "react";
import { getOrganizationMemberCollection } from "../../api";

export const ListComponent = () => {
  const [memberCollection, setMemberCollection] = React.useState([]);

  React.useEffect(() => {
    getOrganizationMemberCollection("lemoncode").then((memberCollection) => {
      setMemberCollection(memberCollection);
    });
  });

  return (
    <>
      <ul>
        {memberCollection.map((member) => (
          <li key={member.login}>{member.login}</li>
        ))}
      </ul>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { getOrganizationMemberCollection } from "../../api";

export const ListComponent = () => {
  const [memberCollection, setMemberCollection] = React.useState([]);

  React.useEffect(() => {
    getOrganizationMemberCollection("lemoncode").then((memberCollection) => {
      setMemberCollection(memberCollection);
    });
  }, []);

  return (
    <>
      <ul>
        {memberCollection.map((member) => (
          <li key={member.login}>
            <Link to={`/organization/${member.login}`}>{member.login}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

import React from "react";
import { ListComponent, DetailComponent } from "./components";

export const OrganizationPage: React.FC = () => {
  return (
    <>
      <h2>Hello from Organization page</h2>
      <ListComponent />
      <DetailComponent />
    </>
  );
};

export const getOrganizationMemberCollection = (
  organization: string
): Promise<any> =>
  fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.json())
    .then((json) => json);

export const getMemberDetail = (memberLogin: string): Promise<any> =>
  fetch(`https://api.github.com/users/${memberLogin}`)
    .then((response) => response.json())
    .then((json) => json);

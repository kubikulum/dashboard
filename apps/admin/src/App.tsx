import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OrganizationList } from "./organization/OrganizationList";
import { OrganizationCreate } from "./organization/OrganizationCreate";
import { OrganizationEdit } from "./organization/OrganizationEdit";
import { OrganizationShow } from "./organization/OrganizationShow";
import { ClusterList } from "./cluster/ClusterList";
import { ClusterCreate } from "./cluster/ClusterCreate";
import { ClusterEdit } from "./cluster/ClusterEdit";
import { ClusterShow } from "./cluster/ClusterShow";
import { InvitationList } from "./invitation/InvitationList";
import { InvitationCreate } from "./invitation/InvitationCreate";
import { InvitationEdit } from "./invitation/InvitationEdit";
import { InvitationShow } from "./invitation/InvitationShow";
import { OrganizationMemberList } from "./organizationMember/OrganizationMemberList";
import { OrganizationMemberCreate } from "./organizationMember/OrganizationMemberCreate";
import { OrganizationMemberEdit } from "./organizationMember/OrganizationMemberEdit";
import { OrganizationMemberShow } from "./organizationMember/OrganizationMemberShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"Kubikulum-api"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="Organization"
            list={OrganizationList}
            edit={OrganizationEdit}
            create={OrganizationCreate}
            show={OrganizationShow}
          />
          <Resource
            name="Cluster"
            list={ClusterList}
            edit={ClusterEdit}
            create={ClusterCreate}
            show={ClusterShow}
          />
          <Resource
            name="Invitation"
            list={InvitationList}
            edit={InvitationEdit}
            create={InvitationCreate}
            show={InvitationShow}
          />
          <Resource
            name="OrganizationMember"
            list={OrganizationMemberList}
            edit={OrganizationMemberEdit}
            create={OrganizationMemberCreate}
            show={OrganizationMemberShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;

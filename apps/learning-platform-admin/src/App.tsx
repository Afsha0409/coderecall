import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { CertificateList } from "./certificate/CertificateList";
import { CertificateCreate } from "./certificate/CertificateCreate";
import { CertificateEdit } from "./certificate/CertificateEdit";
import { CertificateShow } from "./certificate/CertificateShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { CompletionList } from "./completion/CompletionList";
import { CompletionCreate } from "./completion/CompletionCreate";
import { CompletionEdit } from "./completion/CompletionEdit";
import { CompletionShow } from "./completion/CompletionShow";
import { BadgeList } from "./badge/BadgeList";
import { BadgeCreate } from "./badge/BadgeCreate";
import { BadgeEdit } from "./badge/BadgeEdit";
import { BadgeShow } from "./badge/BadgeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Learning Platform"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Certificate"
          list={CertificateList}
          edit={CertificateEdit}
          create={CertificateCreate}
          show={CertificateShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Completion"
          list={CompletionList}
          edit={CompletionEdit}
          create={CompletionCreate}
          show={CompletionShow}
        />
        <Resource
          name="Badge"
          list={BadgeList}
          edit={BadgeEdit}
          create={BadgeCreate}
          show={BadgeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

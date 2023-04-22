import { Admin, Resource } from "react-admin";

import vacancyIcon from "@mui/icons-material/Contacts";
import employerIcon from "@mui/icons-material/BusinessCenter";
import countryIcon from "@mui/icons-material/Public";
import specialityIcon from "@mui/icons-material/ManageAccounts";
import roleIcon from "@mui/icons-material/Group";
import userIcon from "@mui/icons-material/AccountCircle";

import Dashboard from "./components/Dashboard";
// import { authProvider } from "./providers";
import simpleRestProvider from 'ra-data-simple-rest';

import { VacancyList, VacancyEdit, VacancyCreate } from "./components/Vacancy";
import { EmployerList, EmployerEdit, EmployerCreate } from "./components/Employer";
import { CountryList, CountryEdit, CountryCreate } from "./components/Country";
import { SpecialityList, SpecialityEdit, SpecialityCreate } from "./components/Speciality";
import { RoleList } from "./components/Role";
import { UserList, UserEdit } from "./components/User";

const dataProvider = simpleRestProvider('http://rest-api-simple.local');

const App = () => (
  // authProvider={authProvider}
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="employer" list={EmployerList} edit={EmployerEdit} create={EmployerCreate} recordRepresentation="name" icon={employerIcon}/>
    <Resource name="vacancy" list={VacancyList} edit={VacancyEdit} create={VacancyCreate} icon={vacancyIcon} />
    <Resource name="country" list={CountryList} edit={CountryEdit} create={CountryCreate} recordRepresentation="name" icon={countryIcon}/>
    <Resource name="speciality" list={SpecialityList} edit={SpecialityEdit} create={SpecialityCreate} recordRepresentation="name" icon={specialityIcon}/>
    <Resource name="role" list={RoleList} recordRepresentation="name" icon={roleIcon}/>
    <Resource name="user" list={UserList} edit={UserEdit} recordRepresentation="login" icon={userIcon}/>
  </Admin>
);

export default App;

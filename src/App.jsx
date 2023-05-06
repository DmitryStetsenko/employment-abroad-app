import { Admin, Resource } from "react-admin";

import { vacancy, employer, country, housing, speciality, role, user, filter, filtertable, expirience } from './components/icons.js';

import Dashboard from "./components/Dashboard";
// import { authProvider } from "./providers";
import simpleRestProvider from 'ra-data-simple-rest';

import { VacancyList, VacancyEdit, VacancyCreate } from "./components/Vacancy";
import { EmployerList, EmployerEdit, EmployerCreate } from "./components/Employer";
import { CountryList, CountryEdit, CountryCreate } from "./components/Country";
import { HousingList, HousingEdit, HousingCreate } from "./components/Housing";
import { SpecialityList, SpecialityEdit, SpecialityCreate } from "./components/Speciality";
import { ExpirienceList, ExpirienceEdit, ExpirienceCreate } from "./components/Expirience";
import { FilterList, FilterEdit, FilterCreate } from "./components/Filter";
import { FiltertableList } from "./components/Filtertable";
import { RoleList } from "./components/Role";
import { UserList, UserEdit } from "./components/User";

// const dataProvider = simpleRestProvider('http://api.liftron.com.ua');
const dataProvider = simpleRestProvider('http://rest-api-simple.local');

const App = () => (
  // authProvider={authProvider}
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="employer" list={EmployerList} edit={EmployerEdit} create={EmployerCreate} recordRepresentation="name" icon={employer}/>
    <Resource name="vacancy" list={VacancyList} edit={VacancyEdit} create={VacancyCreate} icon={vacancy} />
    <Resource name="country" list={CountryList} edit={CountryEdit} create={CountryCreate} recordRepresentation="name" icon={country}/>
    <Resource name="housing" list={HousingList} edit={HousingEdit} create={HousingCreate} recordRepresentation="name" icon={housing}/>
    <Resource name="speciality" list={SpecialityList} edit={SpecialityEdit} create={SpecialityCreate} recordRepresentation="name" icon={speciality}/>
    <Resource name="expirience" list={ExpirienceList} edit={ExpirienceEdit} create={ExpirienceCreate} recordRepresentation="name" icon={expirience}/>
    <Resource name="role" list={RoleList} recordRepresentation="name" icon={role}/>
    <Resource name="user" list={UserList} edit={UserEdit} recordRepresentation="login" icon={user}/>
    <Resource name="filter" list={FilterList} edit={FilterEdit} create={FilterCreate} icon={filter} />
    <Resource name="filtertable" list={FiltertableList} recordRepresentation="name" icon={filtertable} />
  </Admin>
);

export default App;

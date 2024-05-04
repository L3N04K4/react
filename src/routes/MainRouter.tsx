import React  from 'react'
import { RouteObject, useRoutes } from "react-router-dom";
import { About } from '../Components/pages/About';
import { Contacts } from '../Components/pages/Contacts';
import { Home } from '../Components/pages/Home';
import { University } from '../Components/pages/University';
import { Cards } from '../Components/pages/Cards';
import { ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, UNIVERSITY_ROUTE, DOWNLOAD_ROUTE, CARDS_ROUTE } from './configs';
import { useAuth } from '../hooks/useAuth';
import FormPDF from '../Components/FormPDF/FormPDF'

const MainRouter: React.FC = () => {
  const { isAuth } = useAuth();
  
  const basedPath: RouteObject[] = [
    { path: ABOUT_ROUTE, element: <About /> },
    { path: CONTACTS_ROUTE, element: <Contacts /> },
    { path: HOME_ROUTE, element: <Home /> },
    { path: DOWNLOAD_ROUTE, element: <FormPDF /> },
    { path: CARDS_ROUTE, element: <Cards /> },
  ];
  const authPath: RouteObject[] = isAuth
    ? [{ path: UNIVERSITY_ROUTE, element: <University /> }]
    : [];

  const resultPaths: RouteObject[] = basedPath.concat(authPath);

   console.log(resultPaths);

  return useRoutes(resultPaths);
};

export default MainRouter;
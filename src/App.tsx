import './App.css';
import { TableUniversity } from "./Components/TableUniversity";
import { Navbar } from "./Components/Navbar";
import MainRouter from "./routes/MainRouter";


export const App = () => {
  return (
    <>
    <Navbar />
    <MainRouter />
    <TableUniversity />
    </>
  )
};

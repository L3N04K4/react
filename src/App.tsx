import './App.css';
import { TableUniversity } from "./Components/TableUniversity";
import { Navbar } from "./Components/Navbar";
import MainRouter from "./routes/MainRouter";
import { Form } from "./Components/Form";


export const App = () => {
  return (
    <>
    <Navbar />
    <MainRouter />
    <Form />
    <TableUniversity />
    </>
  )
};

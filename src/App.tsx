import "./App.css";
import { TableUniversity } from "./Components/Table/TableUniversity";
import { Navbar } from "./Components/Navbar/Navbar";
import MainRouter from "./routes/MainRouter";
import { Form } from "./Components/Form/Form";

export const App = () => {
  return (
    <>
      <Navbar />
      <MainRouter />
      <Form />
      <TableUniversity />
    </>
  );
};

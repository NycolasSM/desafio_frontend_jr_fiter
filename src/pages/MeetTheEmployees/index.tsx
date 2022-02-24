import "./index.css";

import Header from "../../components/Header";
import EmployeeCard from "./components/EmployeeCard";

import { Pagination } from "react-bootstrap";

const index = () => {
  return (
    <>
      <Header />
      <div className="meet__the__employees__background"></div>
      <div className="meet__the__employees">
        <div className="employes__board__margin"></div>
        <p className="employes__board__title">
          <div></div>
          <h2>Conheça nossos colaboradores</h2>
        </p>
        <div className="employes__board">
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
        </div>
        <div className="meet__the__employees__pagination">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default index;

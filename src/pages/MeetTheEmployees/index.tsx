import "./index.css";

import Header from "../../components/Header";
import EmployeeCard from "./components/EmployeeCard";

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
        </div>
      </div>
    </>
  );
};

export default index;

import "./index.css";

import Header from "../../components/Header";
import EmployeeCard from "./components/EmployeeCard";

const index = () => {
  return (
    <div className="meet__the__employees">
      <Header />
      <div className="employes__board__margin"></div>
      <div className="employes__board">
        <p className="employes__board__title">
          <div></div>
          <h2>Conheça nossos colaboradores</h2>
        </p>
      </div>
      <EmployeeCard />
    </div>
  );
};

export default index;

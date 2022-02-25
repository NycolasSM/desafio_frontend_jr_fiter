import "./index.css";

import { useEffect, useState } from "react";

import { GetCollaborators } from "../../services/api";

import Header from "../../components/Header";
import EmployeeCard from "./components/EmployeeCard";

import { Pagination } from "react-bootstrap";

const index = () => {
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    loadCollaboratorsData();
  }, []);

  const loadCollaboratorsData = async () => {
    const collaborators = await GetCollaborators(1, 9);
    setCollaborators(collaborators.data);
  };

  console.log(collaborators);

  return (
    <>
      <Header />
      <div className="meet__the__employees__background"></div>
      <div className="meet__the__employees">
        <div className="employes__board__margin"></div>
        <div className="employes__board__title">
          <div></div>
          <h2>Conheça nossos colaboradores</h2>
        </div>
        <div className="employes__board">
          {collaborators.map((collaborator) => (
            <EmployeeCard
              key={collaborator.id}
              name={collaborator.nome}
              role={collaborator.cargo}
              phone={collaborator.telefone}
              profileImg={collaborator.foto}
            />
          ))}
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

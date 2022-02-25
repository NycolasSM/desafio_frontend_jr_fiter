import "./index.css";

import { useEffect, useState } from "react";

import { GetCollaborators } from "../../services/api";

import Header from "../../components/Header";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeCardLoading from "./components/EmployeeCardLoading";
import BoardMargin from "./components/BoardMargin";

import { Pagination } from "react-bootstrap";

const index = () => {
  const [totalCardsToRender] = useState(9);
  const [collaborators, setCollaborators] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadCollaboratorsData();
  }, [actualPage]);

  const loadCollaboratorsData = async () => {
    const collaborators = await GetCollaborators(
      actualPage,
      totalCardsToRender,
    );
    const totalOfCollaborators = parseInt(
      collaborators.headers["x-total-count"],
    );
    const totalOfPages = Math.ceil(totalOfCollaborators / totalCardsToRender);

    setCollaborators(collaborators.data);
    setTotalPages(totalOfPages);
  };

  const paginationNextPage = () => {
    if (actualPage < totalPages) {
      setActualPage(actualPage + 1);
    }
  };

  const paginationPrevPage = () => {
    if (actualPage > 1) {
      setActualPage(actualPage - 1);
    }
  };

  return (
    <>
      <Header />
      <div className="meet__the__employees__background"></div>
      <div className="meet__the__employees">
        <div className="employes__board">
          <BoardMargin />
          <div className="employes__board__title">
            <div></div>
            <h2>Conheça nossos colaboradores</h2>
          </div>
          <div className="employes__board__collaborators__cards">
            {collaborators.length != 0 ? (
              ""
            ) : (
              <>
                <EmployeeCardLoading />
                <EmployeeCardLoading />
                <EmployeeCardLoading />
                <EmployeeCardLoading />
                <EmployeeCardLoading />
                <EmployeeCardLoading />
              </>
            )}
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
        </div>
        <div className="meet__the__employees__pagination">
          {totalPages != 0 ? (
            <Pagination>
              <Pagination.Prev onClick={() => paginationPrevPage()} />
              {Array(totalPages)
                .fill("")
                .map((_, index) => {
                  return (
                    <Pagination.Item
                      key={index + 1}
                      id="pagination"
                      active={index + 1 === actualPage}
                      data-page={index + 1}
                      onClick={() => setActualPage(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  );
                })}
              <Pagination.Next onClick={() => paginationNextPage()} />
            </Pagination>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default index;

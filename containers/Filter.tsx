import React, { useState } from "react";

export const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="container-filtros">
      <div className="title">
        <span>Tarefas</span>
        <img
          src="/public/assets/images/filter.svg"
          alt="Filtrar tarefas"
          onClick={toggleFilters}
        />
        <div className="form">
          <div>
            <label htmlFor="input-date">Data prevista de conclusão:</label>
            <input id="input-date" type="date" />
          </div>
          <div>
            <label htmlFor="input-until">até:</label>
            <input id="input-until" type="date" />
          </div>
          <div className="line" />
          <div>
            <label htmlFor="select-status">Status</label>
            <select name="select-status" id="select-status">
              <option value="">Todas</option>
              <option value="">Ativas</option>
              <option value="">Concluídas</option>
            </select>
          </div>
        </div>
        {showFilters && (
          <div className="filtrosMobile">
            <div>
              <label htmlFor="input-date">Data prevista de conclusão:</label>
              <input id="input-date" type="date" />
            </div>
            <div>
              <label htmlFor="input-until">até:</label>
              <input id="input-until" type="date" />
            </div>
            <div className="line" />
            <div>
              <label htmlFor="select-status">Status</label>
              <select name="select-status" id="select-status">
                <option value="">Todas</option>
                <option value="">Ativas</option>
                <option value="">Concluídas</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

function Header({ handleNewTaskClick, toggleFilters }) {
  const { userData } = useUser();

  return (
    <section>
      <div className="user-actions">
        {userData.name
          ? <h3>{ userData.name }</h3>
          : <Link to="/login">Entrar</Link>}
      </div>

      <h1>To Do App</h1>
      <div>
        <button className="new-task-button" type="button" onClick={handleNewTaskClick}>+ NOVA TAREFA</button>
        <button className="filter-button" type="button" onClick={toggleFilters}>FILTROS</button>
      </div>
    </section>
  );
}

Header.propTypes = {
  handleNewTaskClick: PropTypes.func.isRequired,
  toggleFilters: PropTypes.func.isRequired,
};

export default Header;

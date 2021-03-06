import React from 'react';
import { Link } from 'react-router-dom';

const DashboardAction = () => {
  return (
    <div className='btn-group'>
      <Link className='btn-dashboard btn-local-cases' to='/local-cases'>
        Local Cases
      </Link>
      <Link className='btn-dashboard btn-global-cases' to='/global-cases'>
        Global Cases
      </Link>
    </div>
  );
};

export default DashboardAction;

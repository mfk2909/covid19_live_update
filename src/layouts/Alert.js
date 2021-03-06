import React, { Fragment } from 'react';

const Alert = ({
  type = null,
  cases = null,
  suspectedCases = null,
  local = false
}) => {
  const useStyles = {
    confirmedAlert: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: '#22A7F0',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #111'
    },
    deathAlert: {
      position: 'absolute',
      top: '5rem',
      right: '2rem',
      background: '#C3272B',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #111'
    },
    suspectedAlert: {
      position: 'absolute',
      top: '8rem',
      right: '2rem',
      background: '#26C281',
      color: '#fff',
      padding: '.5rem 1.2rem',
      borderRadius: '2.5em',
      boxShadow: '1px 1px 1px 1px #111'
    }
  };
  return (
    <Fragment>
      {type === 'confirmed' && (
        <div className='alert' style={useStyles.confirmedAlert}>
          <span>New Stats: +{cases}</span>
        </div>
      )}
      {type === 'death' && (
        <div className='alert' style={useStyles.deathAlert}>
          <span>New Deaths: +{cases}</span>
        </div>
      )}
      {local && type === 'suspected' && (
        <div className='alert' style={useStyles.suspectedAlert}>
          <span>Suspected Cases: +{suspectedCases}</span>
        </div>
      )}
    </Fragment>
  );
};

export default Alert;

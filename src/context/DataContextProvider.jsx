import { useState, useEffect } from 'react';
import { DataContext } from '@context/DataContext';

import { PropTypes } from 'prop-types';

const DataContextProvider = ({ children }) => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetch('resume.json')
      .then((res) => res.json())
      .then((data) => setResume(data));
  }, []);

  return (
    <DataContext.Provider
      value={{
        resume,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.any,
};

export default DataContextProvider;

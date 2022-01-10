import React, { useState } from 'react';
const { useFocusEffect } = require('@react-navigation/native');
import DataService from '../services/data-service';
import { DEFAULT_ERROR_CALLBACK } from '../utils/app-util';

const useItemCountAPI = setIsLoading => {
  const [itemCount, setItemCount] = useState(0);

  const fetchItemCount = () => {
    setIsLoading(true);
    DataService.myItemCount().subscribe(
      data => {
        setItemCount(data);
        setIsLoading(false);
      },
      error => {
        setIsLoading(false);
        DEFAULT_ERROR_CALLBACK(error);
      },
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchItemCount();
    }, []),
  );

  return { itemCount, setItemCount, fetchItemCount };
};

export default useItemCountAPI;

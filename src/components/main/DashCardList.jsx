import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getDashBoardInfos } from '../../redux/reducer/dashSlice';

function DashCardList() {
  const dispatch = useDispatch();
  const { startDate, endDate, items } = useSelector(state => state.dashBoard);
  console.log('startDate', startDate);
  console.log('endDate', endDate);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(__getDashBoardInfos());
    }
    return () => {};
  }, []);

  return <div>DashCardList</div>;
}

export default DashCardList;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { __getAdList } from '../../redux/reducer/adSlice';
import AdItem from './AdItem';
const AdList = () => {
  const dispatch = useDispatch();
  const { resultAdList } = useSelector(state => state.adManager);

  useEffect(() => {
    if (resultAdList.length === 0) {
      dispatch(__getAdList());
    }
    return () => {};
  }, []);

  console.log(resultAdList);
  return (
    <Wrapper>
      {resultAdList &&
        resultAdList.map(ad => {
          return (
            <>
              <AdItem ad={ad} key={ad.id} />
            </>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem;
`;

export default AdList;

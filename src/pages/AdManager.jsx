import React from 'react';
import styled from 'styled-components';
import AdList from '../components/adManager/AdList';
import PageHeader from '../components/elements/PageHeader';
import { ReactComponent as DropDownIcon } from '../assets/icons/arrowDropDown.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setAdStatus, __getAdList } from '../redux/reducer/adSlice';

const AdManager = () => {
  const dispatch = useDispatch();
  const { adFilterStatus } = useSelector(state => state.adManager);
  const onChangeSelect = e => {
    const { value } = e.target;
    console.log(value);
    dispatch(setAdStatus({ status: value }));
    if (value === 'all') {
      dispatch(__getAdList());
    }
  };

  return (
    <Wrapper>
      <PageHeader title={'광고관리'} isDateTimePicker={false} />
      <DashBoardsWrapper>
        <SelectWrapper>
          <Select value={adFilterStatus} onChange={onChangeSelect} DropDownIcon={<DropDownIcon />}>
            <option value="all">전체</option>
            <option value="active">진행중</option>
            <option value="ended">중단됨</option>
          </Select>
          <DropDownIcon />
        </SelectWrapper>
        <AdList />
      </DashBoardsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const DashBoardsWrapper = styled.div`
  margin: 2rem 4rem;
  padding: 3rem;
  width: 103.9rem;
  min-height: 65.4rem;
  height: 100%;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const SelectWrapper = styled.div`
  margin: 4rem 1rem 5rem 1rem;
`;

const Select = styled.select`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.white};
  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  width: 12.3rem;
  height: 4rem;
  outline: none;
  border-radius: 1rem;
  padding: 0 3rem;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.mainTxtColor};
  background: url('../../assets/icons/arrowDropDown.svg') no-repeat 95% 50%;
  &::-ms-expand {
    display: none;
  }
`;

const Option = styled.option``;

const StyledDropDownIcon = styled(DropDownIcon)`
  position: relative;
`;

export default AdManager;

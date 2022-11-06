import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import { ReactComponent as DropDownIcon } from '../../assets/icons/arrowDropDown.svg';
import { ReactComponent as MenuDashBoardIcon } from '../../assets/icons/menuDashBoardIcon.svg';
import { ReactComponent as MenuAddManageIcon } from '../../assets/icons/menuAddManage.svg';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isAdPageOn, isAdPageOff } from '../../redux/reducer/adSlice';
import { isDashPageOn, isDashPageOff } from '../../redux/reducer/dashSlice';

const SideBar = () => {
  const isDashBoardPage = useSelector(state => state.dashBoard.isPage);
  const isAdManagerPage = useSelector(state => state.adManager.isPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onPathHandler = path => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Logo src={process.env.PUBLIC_URL + '/img/lever_logo.png'} />
      <Hr></Hr>
      <ContentsWrapper>
        <ServiceWrapper>
          <Label fontWeight={700} txt={'서비스'} />
          <SelectWrapper>
            <Select DropDownIcon={<DropDownIcon />}>
              <option value="">매드업</option>
            </Select>
            <DropDownIcon />
          </SelectWrapper>
        </ServiceWrapper>
        <MenuWrapper>
          <Label fontWeight={700} txt={'광고 센터'} />
          <ButtonWrapper>
            <Button
              active={isDashBoardPage ? 'active' : ''}
              onClick={() => {
                onPathHandler('/');
                dispatch(isDashPageOn());
                dispatch(isAdPageOff());
              }}
            >
              <StyledMenuDashBoardIcon active={isDashBoardPage ? 'active' : ''} />
              대시보드
            </Button>
            <Button
              active={isAdManagerPage ? 'active' : ''}
              onClick={() => {
                onPathHandler('/ad');
                dispatch(isAdPageOn());
                dispatch(isDashPageOff());
              }}
            >
              <StyledMenuAddManageIcon active={isAdManagerPage ? 'active' : ''} />
              광고관리
            </Button>
          </ButtonWrapper>
        </MenuWrapper>
        <GuideWrapper>레버이용가이드</GuideWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 32rem;
  min-height: 100vh;
  height: max-content;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  margin: 6rem 15.6rem 6rem 4rem;
`;

const Hr = styled.hr`
  width: 24rem;
  border: 1px solid ${({ theme }) => theme.sideHoverGray};
`;

const ContentsWrapper = styled.div`
  margin: 5.6rem 4rem;
  display: flex;
  flex-direction: column;
`;

const ServiceWrapper = styled.div``;

const SelectWrapper = styled.div`
  margin: 1.3rem 0 5.3rem 0;
`;

const Select = styled.select`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.white};
  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  width: 24rem;
  height: 6rem;
  outline: none;
  border-radius: 1rem;
  padding: 0 3rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
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

const MenuWrapper = styled.div`
  margin: 5.3rem 0 25rem 0;
`;

const ButtonWrapper = styled.div`
  margin: 1.3rem 0;
`;

const Button = styled.button`
  width: 24rem;
  height: 6rem;
  color: ${props =>
    props.active === 'active' ? props.theme.sideHoverTxtColor : props.theme.mainTxtColor};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: none;
  border-radius: 1rem;
  padding: 0 3rem;
  /* color: ${({ props, theme }) => theme.mainTxtColor}; */
  background-color: ${props =>
    props.active === 'active' ? props.theme.sideHoverGray : 'transparent'};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.sideHoverGray};
    color: ${({ theme }) => theme.sideHoverTxtColor};

    path {
      fill: ${({ theme }) => theme.sideHoverTxtColor};
    }
  }
`;

const StyledMenuDashBoardIcon = styled(MenuDashBoardIcon)`
  margin-right: 1.2rem;
  path {
    fill: ${props =>
      props.active === 'active' ? props.theme.sideHoverTxtColor : props.theme.mainTxtColor};
  }
`;

const StyledMenuAddManageIcon = styled(MenuAddManageIcon)`
  margin-right: 1.2rem;
  path {
    fill: ${props =>
      props.active === 'active' ? props.theme.sideHoverTxtColor : props.theme.mainTxtColor};
  }
`;

const GuideWrapper = styled.div`
  width: 24rem;
  height: 10rem;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  /* SideboxBgColor */
  background-color: ${({ theme }) => theme.SideboxBgColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0rem;
  border-radius: 1rem;
`;

export default SideBar;

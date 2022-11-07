import * as Styled from './style';
import logo from '../../asset/lever_logo.png';
import { sidebarServiceList, sidebarAdCenterList } from '../../constants/SidebarBtnList';

const Sidebar = () => {
  return (
    <>
      <Styled.SidebarContainer>
        <img src={logo} alt="" />
        <Styled.SidebarContent>
          <Styled.SidebarButtons>서비스</Styled.SidebarButtons>
          <Styled.SelectBtnSelect>
            {sidebarServiceList?.map((el, idx) => {
              return <option key={idx}>{el.name}</option>;
            })}
          </Styled.SelectBtnSelect>
          <Styled.SidebarButtons>광고센터</Styled.SidebarButtons>
          {sidebarAdCenterList?.map((el, idx) => {
            return (
              <div key={idx}>
                <Styled.Button to={el.value === 'dashboard' ? '/' : '/management'}>
                  {el.name}
                </Styled.Button>
              </div>
            );
          })}
        </Styled.SidebarContent>
      </Styled.SidebarContainer>
    </>
  );
};
export default Sidebar;

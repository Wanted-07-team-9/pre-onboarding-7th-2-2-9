import { dashBoardcard } from '../../constants/dashboardCard';
import * as Styled from './style';
const ItemCards = ({ data, keyName }) => {
  console.log(data, keyName);
  return (
    <Styled.ItemCardContainer>
      <Styled.DashboardName>{dashBoardcard[keyName[0]].name}</Styled.DashboardName>
      <Styled.DashboardPrice>
        <p>{data[keyName[0]]}</p>
        <p>{dashBoardcard[keyName[0]].unit}</p>
      </Styled.DashboardPrice>
    </Styled.ItemCardContainer>
  );
};
export default ItemCards;

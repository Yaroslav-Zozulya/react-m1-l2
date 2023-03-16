import { InfoBlock, RecipeInfoWrapper } from './RecipeInfo.styled';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';

export const RecipeInfo = ({ time, servings, calories }) => {
  return (
    <RecipeInfoWrapper>
      <InfoBlock>
        <BsAlarm />
        {time} mins
      </InfoBlock>
      <InfoBlock>
        <HiOutlineChartPie />
        {servings}servings
      </InfoBlock>
      <InfoBlock>
        <HiOutlineChartBar />
        {calories}calories
      </InfoBlock>
    </RecipeInfoWrapper>
  );
};

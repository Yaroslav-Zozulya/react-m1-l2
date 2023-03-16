import { RecipeDifficulty } from 'components/RecipeDifficulty/RecipeDifficulty';
import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo';
import { Title, Wrapper } from './Recipe.styled';

const Recipe = ({ recipe: { name, time, servings, calories, difficulty } }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <RecipeInfo time={time} servings={servings} calories={calories} />
      <RecipeDifficulty difficulty={difficulty} />
    </Wrapper>
  );
};

export default Recipe;

import Recipe from 'components/Recipe/Recipe';
import { ListItem } from './RecipeList.styled';

const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <ListItem key={recipe.id}>
          <Recipe recipe={recipe} />
        </ListItem>
      ))}
    </ul>
  );
};

export default RecipeList;

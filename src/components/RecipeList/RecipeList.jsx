import Recipe from 'components/Recipe/Recipe';
import { List, ListItem } from './RecipeList.styled';

const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map(recipe => (
        <ListItem key={recipe.id}>
          <Recipe recipe={recipe} />
        </ListItem>
      ))}
    </List>
  );
};

export default RecipeList;

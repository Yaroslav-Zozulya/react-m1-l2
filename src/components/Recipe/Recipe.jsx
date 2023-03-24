import { Component } from 'react';
import { RecipeDifficulty } from 'components/RecipeDifficulty/RecipeDifficulty';
import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo';
import { Title, Wrapper, Image } from './Recipe.styled';

class Recipe extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const {
      recipe: { name, time, servings, calories, difficulty, image },
    } = this.props;

    const { isOpen } = this.state;

    return (
      <Wrapper>
        <Image src={image} onClick={this.toggle} />
        <Title>{name}</Title>
        {isOpen && (
          <>
            <RecipeInfo time={time} servings={servings} calories={calories} />
            <RecipeDifficulty difficulty={difficulty} />
          </>
        )}
      </Wrapper>
    );
  }
}

export default Recipe;

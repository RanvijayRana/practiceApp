import { Recipe } from './recipe-model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'non-veg', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_1280,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),

        new Recipe('A test Recipe 2', 'non-veg2', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_1280,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}
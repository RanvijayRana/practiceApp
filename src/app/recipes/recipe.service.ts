import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-model';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken roast', 'non-veg', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_1280,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('Spice', 1)
        ]),

        new Recipe('Big Fat Burgur', 'non-veg', 'https://images.ladbible.com/thumbnail?type=webp&url=http://beta.ems.ladbiblegroup.com/s3/content/526cab775df95202b678c6beb130391f.png&quality=70&width=720', [
            new Ingredient('Meat', 1),
            new Ingredient('Bun', 1),
        ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}
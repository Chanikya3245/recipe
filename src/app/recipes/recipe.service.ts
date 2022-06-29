import { style } from '@angular/animations';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe (
            'Chicken Recipe',
            'A Super Tasty-Chicken is Ready for U',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F1033249144001%2Fbef450f6-ff79-47a9-9d66-1ceb7f4e8f9e%2F9f58b44d-2095-4714-a633-f37b4f14d9c0%2F450x320%2Fmatch%2Fimage.jpg',           
             [
                new Ingredient('Chicken', 1 ),
                new Ingredient('Remaining Ingredients', 1)

            ]),
        new Recipe (
            'Mutton Biryani',
            'What are U Waiting For..?',
            'https://img.etimg.com/thumb/msid-89466251,width-450,height-300,imgsize-128062,resizemode-8,quality-100/industry/cons-products/food/samara-wants-full-biryani-takes-control-of-paradise-food-court.jpg',
            [
                new Ingredient('Mutton', 1),
                new Ingredient( 'Rice', 1) 
            ])
      ];

      constructor(private slService: ShoppingListService){

      }
      
      getRecipes() {
          return this.recipes.slice();
      }
    AddIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
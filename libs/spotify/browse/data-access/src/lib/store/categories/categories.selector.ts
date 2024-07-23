import { SelectorUtil } from '@jc4f-nx/spotify-shared-utils';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriesState, categoriesFeatureKey } from './categories.reducer';

export const getCategoriesState =
  createFeatureSelector<CategoriesState>(categoriesFeatureKey);
export const getCategories = createSelector(getCategoriesState, (s) => s.data);
export const getCategoriesMap = createSelector(
  getCategoriesState,
  (s) => s.map
);
export const getCategoriesLoading = createSelector(
  getCategoriesState,
  SelectorUtil.isLoading
);
export const getCategoryById = (categoryId: string) =>
  createSelector(getCategoriesMap, (map) => map.get(categoryId));

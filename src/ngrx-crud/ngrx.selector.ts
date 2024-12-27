import { createSelector, createFeatureSelector } from '@ngrx/store';

export const feature = createFeatureSelector('crud');

export const selector = createSelector(feature, (m => m));

export const singleSelect = (id: any) => {
    return createSelector(feature, (item: any) => {
        debugger
        let a = item.find((data: any) => { return data.id === id })
        return a;

    })
}



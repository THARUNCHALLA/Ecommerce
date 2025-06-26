import { createSelector } from 'reselect';
import _ from 'lodash';

const selectProducts = (state) => state.search.products;
const selectSearchText = (state) => state.search.searchingValue.toLowerCase();
const selectApplied = (state) => state.search.Apply;

function parsePriceRange(range) {
  if (!range || range === 'All') return null;
  const [min, max] = range.replace(/^\$/, '').split('-').map(Number);
  return { min, max };
}

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchText, selectApplied],
  (products = [], searchText, applied) => {
    const category = _.get(applied, 'category', '').toLowerCase();
    const color = _.get(applied, 'color', '').toLowerCase();
    const price = _.get(applied, 'price', '');
    const range = parsePriceRange(price);

    return products.filter((p) => {
      const title = p.title?.toLowerCase() || '';
      const matchesSearch = !searchText || title.includes(searchText);

      const matchesCategory =
        !category || category === 'all' || (p.category || '').toLowerCase() === category;

      const matchesColor =
        !color || color === 'all' || (p.color || '').toLowerCase() === color;

      const priceNum = Number(p.newPrice);
      const matchesPrice =
        !range || (priceNum >= range.min && priceNum <= range.max);

      return matchesSearch && matchesCategory && matchesColor && matchesPrice;
    });
  }
);

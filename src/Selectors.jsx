import { createSelector } from 'reselect';
import _ from 'lodash';
const selectProducts = state => state.search.products;
const selectSearchText = state => state.search.searchingValue.toLowerCase();
const Applied = state => state.search.Apply
function parsePriceRange(range) {
    if (!range || range === 'All') return null;
    const [min, max] = range.substring(1).split('-').map(Number);
    return { min, max }
}



export const selectFilteredProducts = createSelector(
    [selectProducts, selectSearchText, Applied],
    (products, searchText, Data) => {
        const category = _.get(Data, "category", "")
        const color = _.get(Data, "color", "")
        const price = _.get(Data, "price", "")
        console.log(price,"price")
        console.log(color,"color")
        const range = parsePriceRange(price);
        return products.filter(p => {
            const priceNum = Number(p.newPrice);
            const matchesPrice = !range
                ? true                             // no price filter
                : priceNum >= range.min && priceNum <= range.max;
            const matchesSearch = p.title.toLowerCase().includes(searchText);
            const matchesCategory = category.length === 0 ? true :
                (category.toLowerCase() === "all" ? true :
                    p.category.toLowerCase() === category.toLowerCase())

            const matchesColor = color.length === 0 ? true : (color.toLowerCase() === "all" ? true
                : p.color.toLowerCase() === color.toLowerCase())


            return matchesSearch
                && matchesCategory
                && matchesColor
                && matchesPrice;
        });
    }
);

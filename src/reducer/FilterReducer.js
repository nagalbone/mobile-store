const FilterReducer = (state, action) => {
  if (action.type === "FILTER_PRODUCT_INPUT") {
    const tempFilterProd = state.all_products.filter((val) => {
      return (
        val.name.toLowerCase().includes(action.payload.toLowerCase()) ||
        val.category.toLowerCase().includes(action.payload.toLowerCase())
      );
    });

    return {
      ...state,
      filter_products: tempFilterProd,
    };
  }

  if (action.type === "FILTER_BY_PRICE") {
    let newSortData;
    let sorting_value = action.payload;
    const sortingProducts = (a, b) => {
      if (sorting_value === "lth") {
        return a.price - b.price;
      }

      if (sorting_value === "htl") {
        return b.price - a.price;
      }
    };
    newSortData = state.filter_products.sort(sortingProducts);
    return {
      ...state,
      filter_products: newSortData,
    };
  }

  if (action.type === "FILTER_BY_COMPANY") {
    let tempFilterProd;
    if (action.payload === "All") {
      tempFilterProd = state.all_products;
    } else {
      tempFilterProd = state.all_products.filter((val) => {
        return val.company.toLowerCase().includes(action.payload.toLowerCase());
      });
    }

    return {
      ...state,
      filter_products: tempFilterProd,
    };
  }

  return state;
};

export default FilterReducer;

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
  return state;
};

export default FilterReducer;

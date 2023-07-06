const FilterReducer = (state, action) => {
  if (action.type === "FILTER_PRODUCT_INPUT") {
    let { all_products } = state;
    let tempFilterProd = [...all_products];
    console.log(tempFilterProd);
    tempFilterProd = tempFilterProd.filter((val) => {
      return val.name.toLowerCase().includes(action.payload.toLowerCase());
    });

    // console.log(filterPro);

    return {
      ...state,
      all_products: tempFilterProd,
    };
  }
  return state;
};

export default FilterReducer;

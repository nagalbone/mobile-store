import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/FilterReducer";
import Products from "../Products";
const FilterContext = createContext();

const initialState = {
  filter_products: Products,
  all_products: Products,
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};
const Filterprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // filter product
  const filterProductInput = (name) => {
    dispatch({
      type: "FILTER_PRODUCT_INPUT",
      payload: name,
    });
  };

  //filter by price
  const filterByPrice = (option) => {
    dispatch({
      type: "FILTER_BY_PRICE",
      payload: option,
    });
  };

  //filter by company
  const filterByCompany = (option) => {
    dispatch({
      type: "FILTER_BY_COMPANY",
      payload: option,
    });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_BY_PRICE", payload: "lth" });
  }, []);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        filterProductInput,
        filterByPrice,
        filterByCompany,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};
export { Filterprovider, useFilterContext };

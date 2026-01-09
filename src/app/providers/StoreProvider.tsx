import { Provider } from "react-redux";
import type { RouterProviderProps } from "react-router-dom";
import { store } from "../store";

const StoreProvider = ({ children }: RouterProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

import RouterProvider from "./providers/routerProvider";
import StoreProvider from "./providers/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
}

export default App

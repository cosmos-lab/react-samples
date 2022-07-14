import { setProductList, setProductLoading } from "../state/Product";

export function fetchItems() {
  return async (dispatch: any) => {
    dispatch(setProductLoading(true));
    
    const response = await fetch("/api/movies");
    const json = await response.json();

    dispatch(setProductLoading(false));
    dispatch(setProductList(json));
  };
}

export async function addItem(data: any) {
  const response = await fetch("/api/movies", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const json = await response.json();
}

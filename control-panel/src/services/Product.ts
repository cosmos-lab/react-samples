import { setProductList } from "../state/Product";

export function fetchItems() {
  return async (dispatch: any) => {
    const response = await fetch("/api/movies");
    const json = await response.json();
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

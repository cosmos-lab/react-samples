import { useDeferredValue, useMemo, useState, useTransition } from "react";
import List from "./components/ItemList";
import { generateData } from "./data/data";

const itemList = generateData();

function search(keyword: any) {
  if (!itemList) {
    return itemList;
  }
  //Expensive calculation
  return itemList.filter((item: any) => {
    return (
      item.name.includes(keyword) ||
      item.code.includes(keyword) ||
      item.tag.includes(keyword)
    );
  });
}

function App(props: any) {
  const [keyword, setKeyword] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredList = useDeferredValue(search(keyword));

  function searchKeyword(event: any) {
    startTransition(() => {
      setKeyword(event.target.value);
    });
  }

  const delayedList = useMemo(
    () => <List list={filteredList} />,
    [filteredList]
  );

  return (
    <>
      <input type="text" onChange={searchKeyword} />
      {isPending && <p>Searching...</p>}
      {!isPending && delayedList}
    </>
  );
}

export default App;

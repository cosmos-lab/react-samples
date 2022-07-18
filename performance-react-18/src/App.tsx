import {
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import List from "./components/ItemList";
import { generateData } from "./data/data";

import WorkerBuilder from "./workers/woker-builder";
import Worker from "./workers/item-search";

const instance = new WorkerBuilder(Worker);

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

  useEffect(() => {
    instance.onmessage = (message) => {
      if (message) {
        console.log("Message from worker", message.data);
      }
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          instance.postMessage(5);
        }}
      >
        Send Message
      </button>
      <input type="text" onChange={searchKeyword} />
      {isPending && <p>Searching...</p>}
      {!isPending && delayedList}
    </>
  );
}

export default App;

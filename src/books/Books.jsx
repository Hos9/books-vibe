import React, { useContext, useState } from "react";
import { BookContext } from "../Context/BookCOntext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../Component/ListedBooks/ListedReadList";
import ListedWishList from "../Component/ListedBooks/ListedWishList";

const Books = () => {
  const { storedBook, wishList } = useContext(BookContext);
  console.log(storedBook, wishList, "bookContext");

  const [sortingType, setSortingType] = useState("");
  console.log(sortingType, "sortingType");

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center">
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By: {sortingType} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ListedWishList sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;

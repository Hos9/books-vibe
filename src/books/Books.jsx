import React, { useContext } from "react";
import { BookContext } from "../Context/BookCOntext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../Component/ListedBooks/ListedReadList";
import ListedWishList from "../Component/ListedBooks/ListedWishList";

const Books = () => {
  const { storedBook, wishList } = useContext(BookContext);
  console.log(storedBook, wishList, "bookContext");

  return (
    <div className="container mx-auto mt-10">
      <br />

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList />
        </TabPanel>
        <TabPanel>
          <ListedWishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;

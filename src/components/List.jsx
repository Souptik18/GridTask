import { useEffect, useState } from "react";
import Details from "./Details";
import Search from "./Search";

function List() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const handleItemDetail = (item) => {
    setCurrentItem(item);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setCurrentItem(null);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <Search setSearch={setSearchQuery} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemDetail(item)}
              className="cursor-pointer bg-white shadow-md rounded-lg"
            >
              <img
                className="w-4/5 h-80 mx-auto"
                src={item.image}
                alt={item.title}
              />
              <div className="p-4">
                <h4 className="font-semibold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
        {modal && currentItem && (
          <Details item={currentItem} onClose={closeModal} />
        )}
      </div>
    </>
  );
}

export default List;

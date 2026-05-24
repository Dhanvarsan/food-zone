import { useEffect, useState } from "react";
import ShimmerUI from "../components/ShimmerUI";
import HomeCards from "../components/HomeCards";
import { Link } from "react-router-dom";

const HomeCardSection = () => {
  const [listofRest, setlistofRest] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [rawListofRest, setrawListofRest] = useState([]);
  useEffect(() => {
    fetchData();
  }, []); // dependency array
  const fetchData = async () => {
    const data = await fetch(
      "https://my-json-server.typicode.com/Dhanvarsan/food-zone/restaurants",
    );
    const json = await data.json();
    console.log(json, "json");
    setlistofRest(json);
    setrawListofRest(json);
  };
  // Conditional rendering
  if (rawListofRest.length === 0) {
    return <ShimmerUI />;
  }
  return (
    <div className="Container">
      <div className="filter-section d-flex">
        <button
          onClick={() => {
            const sortByDistance = [...listofRest].sort(
              (a, b) => a.distanceInt - b.distanceInt,
            );
            setlistofRest(sortByDistance);
          }}
        >
          Sort By Distance
        </button>
        <div className="SearchBar">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e?.target?.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              const filterBySearch = rawListofRest.filter((e) => {
                return e.restaurantName
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filterBySearch, "filterBySearch");

              setlistofRest(filterBySearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="refreshBtn"
          onClick={() => {
            setlistofRest(rawListofRest);
            setsearchText("");
          }}
        >
          ↻
        </button>
      </div>
      <div className="CardContainer">
        {listofRest.map((resturent) => (
          <Link to={`/restaurents/${resturent?.id}`} key={resturent?.id}>
            <HomeCards resData={resturent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCardSection;

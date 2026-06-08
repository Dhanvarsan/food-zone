import { useEffect, useState } from "react";
import ShimmerUI from "../components/ShimmerUI";
import HomeCards, { HomeCardPromoted } from "../components/HomeCards";
import { Link } from "react-router-dom";
import useRestaurentData from "../utils/useRestaurentData";

const HomeCardSection = () => {
  const [listofRest, setlistofRest] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [rawListofRest, setrawListofRest] = useState([]);
  const restData = useRestaurentData(); // custom hook to fetch restaurant data
  const PromotedCard = HomeCardPromoted(HomeCards); // get the promoted card component
  useEffect(() => {
    if (restData && restData.length > 0) {
      setlistofRest(restData);
      setrawListofRest(restData);
    }
  }, [restData]);
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
            {resturent?.promoted ? (
              <PromotedCard resData={resturent} />
            ) : (
              <HomeCards resData={resturent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCardSection;

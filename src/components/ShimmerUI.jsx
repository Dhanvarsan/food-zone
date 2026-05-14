import HomeCards from "./HomeCards";
const ShimmerUI = () => {
  return (
    <div className="Container">
      <div className="shimmer-container CardContainer">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};
const ShimmerCard = () => (
  <div className="shimmer-card">
    <div className="img-blk"></div>
    <h3></h3>
    <div></div>
  </div>
);

export default ShimmerUI;

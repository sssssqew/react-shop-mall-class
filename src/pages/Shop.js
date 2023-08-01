import AllList from "./AllList.js";

function Shop({ data }) {
  return (
    <section className="Shop mw">
      <h1>Shop The Latest</h1>

      <AllList data={data} />
    </section>
  );
}

export default Shop;

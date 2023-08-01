import MainBanner from "./MainBanner.js";
import MainList from "./MainList.js";

function Main({ data }) {
  return (
    <section className="Main">
      <MainBanner />
      <MainList data={data} />
    </section>
  );
}

export default Main;

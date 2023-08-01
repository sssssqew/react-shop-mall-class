import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import ListCard from "./ListCard.js";
import Count from "./count";
import { useState } from "react";

function Detail({ data }) {
  let { id } = useParams();
  let item = data[id - 1];
  let dataList = data.filter((a) => a.category === item.category);
  let [count, setCount] = useState(1);
  let handleClick = (a) => setCount((prev) => prev + a);

  return (
    <section className="Detail mw">
      <div className="DetailCon">
        <div className="imgCon">
          <img
            src={`${process.env.PUBLIC_URL}/img/${item.img}`}
            alt={item.title}
          />
        </div>
        <div className="DetailText">
          <h2>{item.title}</h2>
          <p>{Number(item.price).toLocaleString()}원</p>

          <Count onClick={handleClick} />
        </div>
      </div>

      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="home" title="Home">
          <div>test1</div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <div>test2</div>
        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger Tab">
          <div>test3</div>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <div>test4</div>
        </Tab>
      </Tabs>

      <h1>Similer Items</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="listCon"
      >
        {dataList.map((item) => {
          return (
            <SwiperSlide className="slide list" key={item._id}>
              <ListCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
export default Detail;

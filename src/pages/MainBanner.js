import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import 'swiper/components/pagination/pagination.min.css'
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
function MainBanner() {
  return (
    <section className="MainBanner mw">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="imgCon bg1">
            <img src="/img/img_bg1.jpg" alt="배너1" />
            <div className="imgText">
              <h2>Gold big hoops</h2>
              <p>$ 68.00</p>
              <Link to="/Shop" className="btn">
                View Product
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgCon bg2">
            <img src="/img/img_bg2.jpg" alt="배너2" />
            <div className="imgText">
              <h2>Gold big hoops</h2>
              <p>$ 68.00</p>
              <Link to="/Shop" className="btn">
                View Product
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgCon bg3">
            <img src="/img/img_bg3.jpg" alt="배너3" />
            <div className="imgText">
              <h2>Gold big hoops</h2>
              <p>$ 68.00</p>
              <Link to="/Shop" className="btn">
                View Product
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainBanner;

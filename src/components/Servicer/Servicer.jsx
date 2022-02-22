import React from "react";
import Grid from "../Grid/Grid";
import "./Servicer.scss";
import iconImages1 from "../../assets/images-icon/ser_1.png";
import iconImages2 from "../../assets/images-icon/ser_2.png";
import iconImages3 from "../../assets/images-icon/ser_3.png";
import iconImages4 from "../../assets/images-icon/ser_4.png";

const Servicer = (props) => {
  const col = props.col;
  const mdCol = props.mdCol;
  const smCol = props.smCol;
  const gap = props.gap;
  const servicerCatalog = props.servicerCatalog;
  
  return (
    <div className="services">
      <div className={`container ${servicerCatalog ? "container-medium" : ""}`}>
        <div className="service-list">
          <Grid col={col} mdCol={mdCol} smCol={smCol} gap={gap}>
            <div className="service-list__item">
              <div className="service-list__item-left">
                <img src={iconImages1} alt="" />
              </div>
              <div className="service-list__item-right">
                <div className="title-service md-block">Miễn phí giao hàng</div>
                <div className="title-service md-none">Giao hàng</div>
                <div className="sumary-service">
                  Miễn phí ship với <span>đơn hàng {`>`} 499k</span>
                </div>
              </div>
            </div>
            <div className="service-list__item">
              <div className="service-list__item-left">
                <img src={iconImages2} alt="" />
              </div>
              <div className="service-list__item-right">
                <div className="title-service md-block">Thanh toán COD</div>
                <div className="title-service md-none">Thanh toán COD</div>
                <div className="sumary-service">
                  Thanh toán khi <span>nhận hàng (COD)</span>
                </div>
              </div>
            </div>
            <div className="service-list__item">
              <div className="service-list__item-left">
                <img src={iconImages3} alt="" />
              </div>
              <div className="service-list__item-right">
                <div className="title-service md-block">Khách hàng VIP</div>
                <div className="title-service md-none">Khách hàng VIP</div>

                <div className="sumary-service">
                  Ưu đãi dành cho <span>khách hàng VIP</span>
                </div>
              </div>
            </div>
            <div className="service-list__item">
              <div className="service-list__item-left">
                <img src={iconImages4} alt="" />
              </div>
              <div className="service-list__item-right">
                <div className="title-service md-block">Hỗ trợ bảo hành</div>
                <div className="title-service md-none">Hỗ trợ bảo hành</div>

                <div className="sumary-service">
                  <span>Đổi, sửa</span> đồ tại tất cả store YODY
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Servicer;

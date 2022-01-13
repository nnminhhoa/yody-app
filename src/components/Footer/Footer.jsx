import React from "react";
import Grid from "../Grid/Grid";
import "./Footer.scss";
import logoBct from "../../assets/images-icon/logo_bct.png";
import { Link } from "react-router-dom";
import logoSocial1 from "../../assets/images-icon/social_1.png";
import logoSocial3 from "../../assets/images-icon/social_3.png";
import logoSocial5 from "../../assets/images-icon/social_5.png";
import logoSocial6 from "../../assets/images-icon/social_6.png";
import logoSocial7 from "../../assets/images-icon/social_7.png";

const footerHelp = [
  {
    title: "Về yody",
    content: [
      {
        name: "Giới thiệu",
      },
      {
        name: "Liên hệ",
      },
      {
        name: "Tuyển dụng",
      },
      {
        name: "Tin tức",
      },
      {
        name: "Hệ thống cửa hàng",
      },
    ],
  },
  {
    title: "Hỗ trợ khách hàng",
    content: [
      {
        name: "Hướng dẫn chọn size",
      },
      {
        name: "Chính sách khách hàng",
      },
      {
        name: "Chính sách đổi/trả",
      },
      {
        name: "Chính sách bảo mật",
      },
      {
        name: "Thanh toán, giao nhận",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            <div className="footer-main__content">
              <div className="title-content">
                <p>
                  “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy
                  nghĩ hành động của mình” là sứ mệnh, là triết lý, chiến lược..
                  luôn cùng YODY tiến bước”
                </p>
              </div>
              <div className="image_bct-content">
                <img src={logoBct} alt="logoBCT" />
              </div>
              <div className="image_icon-content">
                <Link to="/">
                  <img src={logoSocial1} alt="" />
                </Link>
                <Link to="/">
                  <img src={logoSocial3} alt="" />
                </Link>
                <Link to="/">
                  <img src={logoSocial5} alt="" />
                </Link>
                <Link to="/">
                  <img src={logoSocial6} alt="" />
                </Link>
                <Link to="/">
                  <img src={logoSocial7} alt="" />
                </Link>
              </div>
            </div>
            {footerHelp.map((item, index) => (
              <div className="footer-main__list" key={index}>
                <h2>{item.title}</h2>
                <ul>
                  {item.content?.map((item, index) => (
                    <li key={index}>
                      <Link to="/">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer-main__content">
              <ul className="footer-main__content-list">
                <li>
                  <div className="footer-item_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="15.625"
                        fill="#1E1C56"
                        stroke="white"
                        strokeWidth="0.75"
                      />
                      <path
                        d="M15.9998 8C12.7744 8 10.1504 10.6712 10.1504 13.9545C10.1504 15.7911 11.0793 18.0203 12.9113 20.5801C14.252 22.4535 15.5731 23.7895 15.6287 23.8455C15.7309 23.9484 15.8653 24 15.9999 24C16.1306 24 16.2614 23.9513 16.3628 23.8537C16.4185 23.8 17.743 22.518 19.0862 20.6705C20.9197 18.1486 21.8494 15.889 21.8494 13.9545C21.8493 10.6712 19.2252 8 15.9998 8ZM15.9998 16.5252C14.423 16.5252 13.1401 15.2423 13.1401 13.6655C13.1401 12.0886 14.423 10.8058 15.9998 10.8058C17.5767 10.8058 18.8596 12.0886 18.8596 13.6655C18.8596 15.2423 17.5767 16.5252 15.9998 16.5252Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span>
                    Công ty CP Thời Trang YODY, đường An Định, TP Hải Dương
                  </span>
                </li>
                <li>
                  <div className="footer-item_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="15.625"
                        fill="#1E1C56"
                        stroke="white"
                        strokeWidth="0.75"
                      />
                      <g clipPath="url(#clip0)">
                        <path
                          d="M23.6894 20.7226L21.9156 19.54L20.3388 18.4889C20.0345 18.2865 19.6255 18.3528 19.4008 18.6412L18.4251 19.8955C18.2155 20.1677 17.8385 20.246 17.538 20.0795C16.8759 19.7113 16.093 19.3645 14.3656 17.6349C12.6382 15.9053 12.2892 15.1246 11.9209 14.4625C11.7545 14.162 11.8327 13.7849 12.1049 13.5754L13.3593 12.5997C13.6476 12.375 13.714 11.9661 13.5115 11.6617L12.4928 10.1335L11.2779 8.31112C11.0711 8.00094 10.6572 7.90781 10.3375 8.09953L8.9364 8.94008C8.55775 9.16317 8.27941 9.52342 8.15903 9.94613C7.77588 11.3431 7.69863 14.4247 12.6373 19.3634C17.576 24.3021 20.6574 24.2246 22.0543 23.8414C22.477 23.7211 22.8373 23.4427 23.0604 23.064L23.9009 21.663C24.0927 21.3433 23.9995 20.9293 23.6894 20.7226Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(8 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="info">
                    <Link to="/">Liên hệ đặt hàng: 024 730 56665</Link>
                    <Link to="/">Thắc mắc đơn hàng: 024 730 16661</Link>
                    <Link to="/">Góp ý khiếu nại: 1800 2086</Link>
                  </div>
                </li>
                <li>
                  <div className="footer-item_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="15.625"
                        fill="#1E1C56"
                        stroke="white"
                        strokeWidth="0.75"
                      />
                      <g clipRule="url(#clip0)">
                        <path
                          d="M18.606 16.0813L24 19.4913V12.5273L18.606 16.0813Z"
                          fill="white"
                        />
                        <path
                          d="M8 12.5273V19.4913L13.394 16.0813L8 12.5273Z"
                          fill="white"
                        />
                        <path
                          d="M23.0003 10.5H9.00027C8.50127 10.5 8.10527 10.872 8.03027 11.351L16.0003 16.602L23.9703 11.351C23.8953 10.872 23.4993 10.5 23.0003 10.5Z"
                          fill="white"
                        />
                        <path
                          d="M17.6897 16.6861L16.2747 17.6181C16.1907 17.6731 16.0957 17.7001 15.9997 17.7001C15.9037 17.7001 15.8087 17.6731 15.7247 17.6181L14.3097 16.6851L8.03174 20.6561C8.10874 21.1311 8.50274 21.5001 8.99974 21.5001H22.9997C23.4967 21.5001 23.8907 21.1311 23.9677 20.6561L17.6897 16.6861Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(8 8)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <Link to="/">chamsockhachhang@yody.vn</Link>
                </li>
                <li>
                  <div className="footer-item_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="15.625"
                        fill="#1E1C56"
                        stroke="white"
                        strokeWidth="0.75"
                      />
                      <path
                        d="M18.25 11.5942C18.25 11.6803 18.3201 11.7504 18.4063 11.7504H21.9786C21.8928 11.5921 21.7825 11.4467 21.65 11.3213L18.6368 8.47061C18.5198 8.35998 18.3896 8.2677 18.25 8.19482V11.5942H18.25Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.3125 11.5938C17.3125 12.1968 17.8032 12.6875 18.4062 12.6875H22.1875V22.2812C22.1875 23.229 21.4165 24 20.4688 24H11.7188C10.771 24 10 23.229 10 22.2812V9.71875C10 8.77103 10.771 8 11.7188 8H17.3125V11.5938Z"
                        fill="white"
                      />
                      <path
                        d="M13.8945 20L14.9957 17H14.2911L13.4979 19.3057L12.6999 17H12L13.0966 20H13.8945Z"
                        fill="#1E1C56"
                      />
                      <path
                        d="M17.7593 20L16.6115 17H15.8135L14.6703 20H15.3656L15.5616 19.46H16.8634L17.0594 20H17.7593ZM16.2148 17.6814L16.6628 18.9071H15.7669L16.2148 17.6814Z"
                        fill="#1E1C56"
                      />
                      <path
                        d="M17.5969 17V17.5657H18.4741V20H19.1181V17.5657H20V17H17.5969Z"
                        fill="#1E1C56"
                      />
                    </svg>
                  </div>
                  <b>080.120.6940</b>
                </li>
              </ul>
            </div>
          </Grid>
        </div>
        <div className="footer-bottom">
          <p>
            @ Bản quyền thuộc về <Link to="/">Yody.vn</Link> All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

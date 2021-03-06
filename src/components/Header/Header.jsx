import React, { useRef } from "react";
import "./Header.scss";
import bannerTop from "../../assets/images/bannertop.jpg";
import iconFree from "../../assets/images/free_tb.png";
import { Link, useLocation } from "react-router-dom";
import navHeader from "../../assets/data/dataNavHeader";

const Header = () => {
  const menuRef = useRef();
  const headerRef = useRef();
  const menuOpacityRef = useRef();
  const { pathname } = useLocation();
  const activeNav = navHeader.findIndex((e) => e.path === pathname);

  const handleToggleMenu = () => {
    menuRef.current.classList.toggle("active");
    menuOpacityRef.current.classList.toggle("active");
  };

  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
      headerRef.current.classList.add("toggle-header");
    } else {
      headerRef.current.classList.remove("toggle-header");
    }

    prevScrollpos = currentScrollPos;
  };
  return (
    <header className="header" ref={headerRef}>
      <div className="header-top__banner">
        <img src={bannerTop} alt="bannerTop" />
      </div>
      <div className="container header-top">
        <div className="header-top__list">
          <div className="header-top__list__item">
            <i className="fas fa-map-marker-alt"></i>
            <span>
              Tìm <b>160+</b> cửa hàng
            </span>
          </div>
          <div className="header-top__list__item">
            <i className="fas fa-phone-alt"></i>
            <b className="header-top__list__item-phone">1800 2086</b>
            <div className="header-top__list__item-img">
              <img src={iconFree} alt="free" />
            </div>
          </div>
          <div className="header-top__list__item">
            <i className="fas fa-envelope"></i>
            <span>chamsockhachhang@yody.vn</span>
          </div>
        </div>
        <div className="header-top__list">
          <div className="header-top__list__item lighting">
            <i className="fas fa-bolt"></i>
            <b>Freeship đơn hàng {`>`}500k</b>
          </div>
          <div className="header-top__list__item lighting">
            <i className="fas fa-bolt"></i>
            <b>Miễn phí đổi trả hàng tại điểm bán trong 15 ngày</b>
          </div>
        </div>
      </div>
      <div className="header-main container">
        <div className="header-main__logo">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="67"
              height="32"
              viewBox="0 0 67 32"
              fill="none"
            >
              <path
                d="M24.5011 19.97C23.7396 19.9717 22.9939 19.7453 22.3539 19.3182C21.7139 18.891 21.2069 18.2812 20.8941 17.5625C20.5813 16.8437 20.476 16.0467 20.5909 15.2673C20.7058 14.488 21.036 13.7598 21.5417 13.1704C22.0475 12.581 22.7071 12.1556 23.441 11.9456C24.175 11.7355 24.952 11.7498 25.6783 11.9866C26.4047 12.2234 27.0493 12.6727 27.5346 13.2803C28.0198 13.8878 28.3249 14.6277 28.4131 15.4108H32.3765C32.2576 13.2845 31.3428 11.29 29.8263 9.85074C28.3099 8.41147 26.3112 7.64081 24.2548 7.7024C22.1984 7.76399 20.2461 8.65298 18.8126 10.1806C17.3791 11.7082 16.5771 13.7541 16.5771 15.884C16.5771 18.0138 17.3791 20.0597 18.8126 21.5873C20.2461 23.1149 22.1984 24.0039 24.2548 24.0655C26.3112 24.1271 28.3099 23.3564 29.8263 21.9172C31.3428 20.4779 32.2576 18.4834 32.3765 16.3571H28.4275C28.3153 17.3532 27.8532 18.2718 27.1292 18.938C26.4052 19.6042 25.4698 19.9716 24.5011 19.97V19.97Z"
                fill="#2A2A86"
              />
              <path
                d="M11.5136 8.17432V16.1994C11.5136 18.299 9.71199 19.9999 7.68394 19.9999C5.65589 19.9999 3.83785 18.2926 3.83785 16.1994V8.17432H0V16.1994C-3.62409e-08 17.244 0.198766 18.2783 0.584945 19.2433C0.971124 20.2083 1.53715 21.0851 2.2507 21.8236C2.96424 22.5621 3.81133 23.1478 4.74358 23.5473C5.67582 23.9469 6.67497 24.1524 7.68394 24.1521C9.14784 24.1521 10.2741 23.7663 11.5136 22.5918V24.1755C11.5136 26.2751 9.91582 27.976 7.68394 27.976C5.45205 27.976 3.67931 26.2708 3.67931 24.1755H0C0.0330013 26.2624 0.856961 28.2523 2.2942 29.716C3.73143 31.1798 5.66679 32.0001 7.68291 32.0001C9.69903 32.0001 11.6344 31.1798 13.0716 29.716C14.5089 28.2523 15.3328 26.2624 15.3658 24.1755V8.18924L11.5136 8.17432Z"
                fill="#2A2A86"
              />
              <path
                d="M62.2801 8.17432V16.1994C62.2801 18.299 60.4786 19.9999 58.4505 19.9999C56.4225 19.9999 54.6044 18.2947 54.6044 16.1994V8.17432H50.7666V16.1994C50.7666 17.244 50.9654 18.2783 51.3515 19.2433C51.7377 20.2083 52.3037 21.0851 53.0173 21.8236C53.7308 22.5621 54.5779 23.1478 55.5102 23.5473C56.4424 23.9469 57.4415 24.1524 58.4505 24.1521C59.9144 24.1521 61.0406 23.7663 62.2801 22.5918V24.1755C62.2801 26.2751 60.6824 27.976 58.4505 27.976C56.2186 27.976 54.4459 26.2708 54.4459 24.1755H50.7666C50.7996 26.2624 51.6236 28.2523 53.0608 29.716C54.498 31.1798 56.4334 32.0001 58.4495 32.0001C60.4656 32.0001 62.4009 31.1798 63.8382 29.716C65.2754 28.2523 66.0994 26.2624 66.1324 24.1755V8.18924L62.2801 8.17432Z"
                fill="#FCAF17"
              />
              <path
                d="M45.3429 0V9.10366C44.1688 8.20857 42.7511 7.72133 41.293 7.71178C37.1751 7.71178 33.8273 11.1222 33.5967 15.4129H37.5416C37.658 14.3726 38.1543 13.4177 38.9287 12.7439C39.7032 12.0701 40.6972 11.7284 41.7071 11.7887C42.7171 11.8491 43.6665 12.3069 44.3609 13.0685C45.0553 13.8301 45.4422 14.8377 45.4422 15.885C45.4422 16.9323 45.0553 17.94 44.3609 18.7016C43.6665 19.4631 42.7171 19.921 41.7071 19.9814C40.6972 20.0417 39.7032 19.7 38.9287 19.0262C38.1543 18.3524 37.658 17.3975 37.5416 16.3572H33.5967C33.8293 20.65 37.1854 24.0562 41.293 24.0562C42.7626 24.0289 44.1878 23.5299 45.3717 22.6281V22.6281L45.9318 23.8686H49.2075V0H45.3429Z"
                fill="#FCAF17"
              />
            </svg>
          </Link>
        </div>
        <nav className="header-main__nav">
          <div
            className="header-main__nav-opacity"
            ref={menuOpacityRef}
            onClick={handleToggleMenu}
          ></div>
          <div className="header-main__nav-list" ref={menuRef}>
            <ul>
              {navHeader.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`${index === activeNav ? "active" : ""}`}
                    onClick={handleToggleMenu}
                  >
                    {item.display}
                  </Link>
                  {item.megaMenu && (
                    <div className="mega-menu">
                      <ul className="mega-menu__list container">
                        {item.megaMenu?.map((item, index) => (
                          <li
                            key={index}
                            className={`${
                              item.bannerNav
                                ? "banner__nav"
                                : "mega-menu__list-1"
                            }`}
                          >
                            {item.bannerNav && (
                              <div className="banner__nav-item">
                                <Link to={item.path}>
                                  <img src={item.bannerNav} alt="banner" />
                                </Link>
                              </div>
                            )}
                            {item.product && (
                              <Link to={item.path}>{item.product}</Link>
                            )}
                            {item.productParent && (
                              <ul>
                                {item.productParent?.map((item, index) => (
                                  <li key={index}>
                                    <Link to={item.path}>
                                      {item.name}
                                      {item.hot ? (
                                        <span
                                          className={`${
                                            item.hot === "sale" ? "sale" : ""
                                          }`}
                                        >
                                          {item.hot}
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {item.collection && (
                              <ul className="collection-list">
                                {item.collection?.map((item, index) => (
                                  <li key={index}>
                                    <Link to="/">
                                      <img src={item.collection_image} alt="" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              <div
                className="header-main__nav-close"
                onClick={handleToggleMenu}
              >
                <i className="fas fa-times"></i>
              </div>
            </ul>
          </div>
        </nav>
        <div className="header-main__search">
          <form action="submit" className="header-main__search-form">
            <button className="btn-md__search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.8056 18.8613L15.9567 15.0124C17.0528 13.6739 17.5924 11.9653 17.4638 10.2401C17.3352 8.51484 16.5482 6.90509 15.2657 5.74396C13.9833 4.58282 12.3035 3.95917 10.574 4.00208C8.84455 4.04498 7.19776 4.75115 5.97446 5.97446C4.75115 7.19776 4.04498 8.84455 4.00208 10.574C3.95917 12.3035 4.58282 13.9833 5.74396 15.2657C6.90509 16.5482 8.51484 17.3352 10.2401 17.4638C11.9653 17.5924 13.6739 17.0528 15.0124 15.9567L18.8613 19.8023C18.9231 19.8643 18.9965 19.9136 19.0773 19.9472C19.1581 19.9808 19.2447 19.9982 19.3323 19.9984C19.4198 19.9985 19.5065 19.9814 19.5875 19.9481C19.6684 19.9147 19.742 19.8657 19.804 19.804C19.866 19.7422 19.9152 19.6688 19.9488 19.5879C19.9825 19.5071 19.9998 19.4205 20 19.3329C20.0001 19.2454 19.9831 19.1587 19.9497 19.0778C19.9163 18.9968 19.8674 18.9233 19.8056 18.8613ZM10.7391 16.1395C9.67005 16.1391 8.6251 15.8217 7.73639 15.2274C6.84769 14.6332 6.15516 13.7888 5.74636 12.8009C5.33757 11.8131 5.23087 10.7262 5.43977 9.67774C5.64867 8.62927 6.16377 7.66629 6.91995 6.91056C7.67613 6.15483 8.63942 5.6403 9.68802 5.43203C10.7366 5.22377 11.8234 5.33111 12.811 5.74049C13.7986 6.14988 14.6426 6.84292 15.2363 7.73197C15.8301 8.62103 16.1468 9.66618 16.1466 10.7353C16.1449 12.1686 15.5745 13.5427 14.5607 14.5559C13.5469 15.5691 12.1725 16.1386 10.7391 16.1395Z"
                  fill="#22215B"
                />
              </svg>
            </button>
            <input type="text" placeholder="Tìm kiếm..." />
            <button type="submit" className="btn-big__search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1236 3.49311C9.09982 3.49311 7.15897 4.29708 5.72797 5.72814C4.29697 7.15921 3.49304 9.10015 3.49304 11.124C3.49304 13.1478 4.29697 15.0888 5.72797 16.5198C7.15897 17.9509 9.09982 18.7549 11.1236 18.7549C13.1473 18.7549 15.0881 17.9509 16.5191 16.5198C17.9501 15.0888 18.7541 13.1478 18.7541 11.124C18.7541 9.10015 17.9501 7.15921 16.5191 5.72814C15.0881 4.29708 13.1473 3.49311 11.1236 3.49311ZM4.67223 4.67235C6.38323 2.96127 8.70384 2 11.1236 2C13.5433 2 15.8639 2.96127 17.5749 4.67235C19.2859 6.38343 20.2471 8.70415 20.2471 11.124C20.2471 13.2921 19.4755 15.3806 18.0843 17.0223L22 20.9452L20.9433 22L17.0292 18.0787C15.3863 19.4739 13.2949 20.248 11.1236 20.248C8.70384 20.248 6.38323 19.2867 4.67223 17.5756C2.96123 15.8645 2 13.5438 2 11.124C2 8.70415 2.96123 6.38343 4.67223 4.67235Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="header-main__tool">
          <div className="user">
            <Link to="/account">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M14.0001 1.64722C10.4081 1.64722 7.48584 4.56951 7.48584 8.16146C7.48584 11.7534 10.4081 14.6757 14.0001 14.6757C17.592 14.6757 20.5143 11.7534 20.5143 8.16146C20.5143 4.56951 17.592 1.64722 14.0001 1.64722ZM14.0001 13.2281C11.2063 13.2281 8.93345 10.9552 8.93345 8.16146C8.93345 5.36772 11.2063 3.09483 14.0001 3.09483C16.7938 3.09483 19.0667 5.36772 19.0667 8.16146C19.0667 10.9552 16.7938 13.2281 14.0001 13.2281Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.2"
                />
                <path
                  d="M22.1051 18.9314C20.3217 17.1206 17.9574 16.1233 15.4478 16.1233H12.5525C10.043 16.1233 7.67862 17.1206 5.89517 18.9314C4.12044 20.7334 3.14307 23.112 3.14307 25.6293C3.14307 26.029 3.46714 26.3531 3.86687 26.3531H24.1334C24.5331 26.3531 24.8572 26.029 24.8572 25.6293C24.8572 23.112 23.8798 20.7334 22.1051 18.9314ZM4.62252 24.9055C4.98515 20.7997 8.40325 17.5709 12.5525 17.5709H15.4478C19.597 17.5709 23.0151 20.7997 23.3778 24.9055H4.62252Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.2"
                />
              </svg>
            </Link>
            <ul className="user__header">
              <li>
                <Link to="/account/register">Đăng ký</Link>
              </li>
              <li>
                <Link to="/account/login">Đăng nhập</Link>
              </li>
            </ul>
          </div>
          <div className="wishlist">
            <Link to="/wish-list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M3.5 14.0004C0.875 10.5004 1.75 5.25039 6.125 3.50039C10.5 1.75039 13.125 5.25039 14 7.00039C14.875 5.25039 18.375 1.75039 22.75 3.50039C27.125 5.25039 27.125 10.5004 24.5 14.0004C21.875 17.5004 14 24.5004 14 24.5004C14 24.5004 6.125 17.5004 3.5 14.0004Z"
                  stroke="black"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="cart">
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.89781 11.5713C8.46561 11.5713 8.11523 11.2565 8.11523 10.8683L8.11523 6.36911C8.11523 3.49602 10.708 1.16693 13.9063 1.16693C17.1046 1.16693 19.6974 3.49602 19.6974 6.36911L19.6974 10.8683C19.6974 11.2565 19.347 11.5713 18.9148 11.5713C18.4826 11.5713 18.1322 11.2565 18.1322 10.8683L18.1322 6.36911C18.1322 4.27253 16.2402 2.57292 13.9063 2.57292C11.5724 2.57292 9.68038 4.27253 9.68038 6.36911L9.68039 10.8683C9.68039 11.2565 9.33001 11.5713 8.89781 11.5713Z"
                  fill="#222222"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.01791 7.81299H19.7943C20.9248 7.81296 21.8548 7.81294 22.5957 7.90897C23.3731 8.00972 24.0554 8.22789 24.6209 8.74717C25.1863 9.26645 25.4608 9.92705 25.6259 10.6919C25.7833 11.4209 25.8605 12.346 25.9544 13.4705L26.6574 21.8909C26.7105 22.5263 26.7574 23.0877 26.7326 23.5422C26.7057 24.034 26.5905 24.5388 26.2028 24.9593C25.8152 25.3798 25.3208 25.5364 24.8319 25.604C24.3802 25.6664 23.8158 25.6664 23.177 25.6663H4.6352C3.99643 25.6664 3.432 25.6664 2.98029 25.604C2.49142 25.5364 1.997 25.3798 1.60936 24.9593C1.22172 24.5388 1.10647 24.034 1.07959 23.5422C1.05475 23.0877 1.10167 22.5263 1.15477 21.8909L1.85779 13.4705C1.95165 12.346 2.02886 11.4209 2.18627 10.6919C2.35142 9.92705 2.6259 9.26645 3.19132 8.74717C3.75673 8.22789 4.43908 8.00972 5.21643 7.90897C5.95736 7.81294 6.88737 7.81296 8.01791 7.81299ZM5.43373 9.57922C4.83819 9.65641 4.54347 9.79413 4.3339 9.9866C4.12433 10.1791 3.96236 10.4608 3.83584 11.0467C3.70422 11.6563 3.63447 12.4716 3.53466 13.6672L2.841 21.9755C2.78193 22.683 2.74682 23.1265 2.76453 23.4504C2.78052 23.7432 2.83506 23.8017 2.85011 23.8178L2.85112 23.8189L2.85212 23.82C2.86699 23.8363 2.92087 23.8954 3.2118 23.9356C3.53379 23.9801 3.97942 23.982 4.69077 23.982H23.1214C23.8328 23.982 24.2784 23.9801 24.6004 23.9356C24.8913 23.8954 24.9452 23.8363 24.9601 23.82L24.9611 23.8189L24.9621 23.8178C24.9771 23.8017 25.0317 23.7432 25.0477 23.4504C25.0654 23.1265 25.0303 22.683 24.9712 21.9755L24.2775 13.6672C24.1777 12.4716 24.108 11.6563 23.9763 11.0467C23.8498 10.4608 23.6878 10.1791 23.4783 9.9866C23.2687 9.79413 22.974 9.65641 22.3784 9.57922C21.7589 9.49893 20.9391 9.49727 19.7372 9.49727H8.07501C6.8731 9.49727 6.05325 9.49893 5.43373 9.57922Z"
                  fill="#222222"
                />
              </svg>
            </Link>
            <div className="cart-content">
              <div className="cart-content__empty">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="105"
                  viewBox="0 0 90 105"
                  fill="none"
                >
                  <path
                    d="M86.8309 83.4357C86.9628 83.2876 87.0619 83.1134 87.1217 82.9244C87.1815 82.7353 87.2006 82.5358 87.1779 82.3388L82.9591 45.7763C82.9196 45.4335 82.7554 45.1173 82.4978 44.8877C82.2402 44.6581 81.9072 44.5313 81.5622 44.5312H74.531V41.7188C74.531 39.481 73.642 37.3349 72.0597 35.7525C70.4773 34.1702 68.3312 33.2812 66.0935 33.2812C63.8557 33.2812 61.7096 34.1702 60.1272 35.7525C58.5449 37.3349 57.656 39.481 57.656 41.7188H54.8435V37.5C54.8435 34.8893 53.8064 32.3855 51.9603 30.5394C50.1142 28.6934 47.6104 27.6562 44.9997 27.6562C42.389 27.6562 39.8852 28.6934 38.0391 30.5394C36.1931 32.3855 35.156 34.8893 35.156 37.5V41.7188H32.3435C32.3435 39.481 31.4545 37.3349 29.8722 35.7525C28.2898 34.1702 26.1437 33.2812 23.906 33.2812C21.6682 33.2812 19.5221 34.1702 17.9397 35.7525C16.3574 37.3349 15.4685 39.481 15.4685 41.7188V44.5312H8.43721C8.09217 44.5313 7.75917 44.6581 7.50159 44.8877C7.24401 45.1173 7.07983 45.4335 7.04028 45.7763L2.82152 82.3388C2.7988 82.5358 2.81798 82.7353 2.87781 82.9243C2.93764 83.1134 3.03676 83.2876 3.16868 83.4356C3.30059 83.5836 3.46232 83.7021 3.64324 83.7832C3.82416 83.8643 4.02019 83.9062 4.21846 83.9062H21.5579L20.9235 90.8088C20.9056 91.0035 20.9285 91.1998 20.9907 91.3852C21.053 91.5705 21.1532 91.7409 21.285 91.8853C21.4168 92.0298 21.5772 92.1451 21.7561 92.2241C21.935 92.303 22.1284 92.3438 22.3239 92.3438H67.4997C67.6947 92.3437 67.8876 92.3032 68.0662 92.2246C68.2447 92.146 68.4049 92.0312 68.5366 91.8874C68.6684 91.7435 68.7687 91.5739 68.8314 91.3892C68.894 91.2045 68.9176 91.0087 68.9005 90.8144L68.2907 83.9062H85.781C85.9792 83.9063 86.1753 83.8644 86.3563 83.7833C86.5372 83.7022 86.699 83.5837 86.8309 83.4357ZM66.0935 36.0938C67.5848 36.0954 69.0145 36.6886 70.0691 37.7431C71.1236 38.7977 71.7168 40.2274 71.7185 41.7188V44.5312H64.8168L64.6818 43.002C64.651 42.6517 64.4901 42.3256 64.2308 42.0881C63.9715 41.8505 63.6326 41.7188 63.281 41.7188H60.4685C60.4701 40.2274 61.0633 38.7977 62.1178 37.7431C63.1724 36.6886 64.6021 36.0954 66.0935 36.0938ZM37.9685 37.5C37.9685 35.6352 38.7092 33.8468 40.0279 32.5282C41.3465 31.2095 43.1349 30.4688 44.9997 30.4688C46.8645 30.4688 48.6529 31.2095 49.9716 32.5282C51.2902 33.8468 52.031 35.6352 52.031 37.5V41.7188H37.9685V37.5ZM18.281 41.7188C18.281 40.2269 18.8736 38.7962 19.9285 37.7413C20.9834 36.6864 22.4141 36.0938 23.906 36.0938C25.3978 36.0938 26.8285 36.6864 27.8834 37.7413C28.9383 38.7962 29.531 40.2269 29.531 41.7188H26.7185C26.3678 41.7187 26.0297 41.8497 25.7706 42.0861C25.5115 42.3225 25.3501 42.6471 25.318 42.9963L25.1774 44.5312H18.281V41.7188ZM5.79645 81.0938L9.69053 47.3438H15.4685V50.1562C15.4685 50.5292 15.6166 50.8869 15.8803 51.1506C16.1441 51.4143 16.5017 51.5625 16.8747 51.5625C17.2477 51.5625 17.6054 51.4143 17.8691 51.1506C18.1328 50.8869 18.281 50.5292 18.281 50.1562V47.3438H24.9185L21.8164 81.0938H5.79645ZM23.8654 89.5312L28.0017 44.5312H35.156V50.1562C35.156 50.5292 35.3041 50.8869 35.5678 51.1506C35.8316 51.4143 36.1892 51.5625 36.5622 51.5625C36.9352 51.5625 37.2929 51.4143 37.5566 51.1506C37.8203 50.8869 37.9685 50.5292 37.9685 50.1562V44.5312H52.031V50.1562C52.031 50.5292 52.1791 50.8869 52.4428 51.1506C52.7066 51.4143 53.0642 51.5625 53.4372 51.5625C53.8102 51.5625 54.1679 51.4143 54.4316 51.1506C54.6953 50.8869 54.8435 50.5292 54.8435 50.1562V44.5312H61.9934L65.9639 89.5312H23.8654ZM68.0429 81.0938L65.0648 47.3438H71.7185V50.1562C71.7185 50.5292 71.8666 50.8869 72.1303 51.1506C72.3941 51.4143 72.7517 51.5625 73.1247 51.5625C73.4977 51.5625 73.8554 51.4143 74.1191 51.1506C74.3828 50.8869 74.531 50.5292 74.531 50.1562V47.3438H80.3089L84.203 81.0938H68.0429Z"
                    fill="#7A7A9D"
                    stroke="white"
                  />
                  <path
                    d="M36.5625 57.1875C37.3392 57.1875 37.9688 56.5579 37.9688 55.7812C37.9688 55.0046 37.3392 54.375 36.5625 54.375C35.7858 54.375 35.1562 55.0046 35.1562 55.7812C35.1562 56.5579 35.7858 57.1875 36.5625 57.1875Z"
                    fill="#7A7A9D"
                  />
                  <path
                    d="M16.875 57.1875C17.6517 57.1875 18.2812 56.5579 18.2812 55.7812C18.2812 55.0046 17.6517 54.375 16.875 54.375C16.0983 54.375 15.4688 55.0046 15.4688 55.7812C15.4688 56.5579 16.0983 57.1875 16.875 57.1875Z"
                    fill="#7A7A9D"
                  />
                  <path
                    d="M53.4375 57.1875C54.2142 57.1875 54.8438 56.5579 54.8438 55.7812C54.8438 55.0046 54.2142 54.375 53.4375 54.375C52.6608 54.375 52.0312 55.0046 52.0312 55.7812C52.0312 56.5579 52.6608 57.1875 53.4375 57.1875Z"
                    fill="#7A7A9D"
                  />
                  <path
                    d="M73.125 57.1875C73.9017 57.1875 74.5312 56.5579 74.5312 55.7812C74.5312 55.0046 73.9017 54.375 73.125 54.375C72.3483 54.375 71.7188 55.0046 71.7188 55.7812C71.7188 56.5579 72.3483 57.1875 73.125 57.1875Z"
                    fill="#7A7A9D"
                  />
                  <path
                    d="M7.40192 26.5L10 22L12.5981 26.5H7.40192Z"
                    stroke="#7A7A9D"
                  />
                  <path
                    d="M32.2422 14.5625C32.579 13.9792 33.421 13.9792 33.7578 14.5625C34.0946 15.1458 33.6736 15.875 33 15.875C32.3264 15.875 31.9054 15.1458 32.2422 14.5625Z"
                    stroke="#DDE1EF"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M57.2422 17.5625C57.579 16.9792 58.421 16.9792 58.7578 17.5625C59.0946 18.1458 58.6736 18.875 58 18.875C57.3264 18.875 56.9054 18.1458 57.2422 17.5625Z"
                    stroke="#DDE1EF"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M13.2422 4.5625C13.579 3.97917 14.421 3.97917 14.7578 4.5625C15.0946 5.14583 14.6736 5.875 14 5.875C13.3264 5.875 12.9054 5.14583 13.2422 4.5625Z"
                    stroke="#DDE1EF"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M71.6597 20.4375C72.4776 19.0208 74.5224 19.0208 75.3403 20.4375C76.1582 21.8542 75.1358 23.625 73.5 23.625C71.8642 23.625 70.8418 21.8542 71.6597 20.4375Z"
                    stroke="#7A7A9D"
                    strokeWidth="1.25"
                  />
                  <g clipPath="url(#clip0_1269:1979)">
                    <path
                      d="M49.0032 4.15775L48.9709 4.27849L49.0916 4.31084L50.3753 4.65481C50.8421 4.77989 51.1191 5.25968 50.9941 5.72646C50.869 6.19325 50.3892 6.47026 49.9224 6.34518L48.6387 6.00121L48.518 5.96886L48.4856 6.0896L48.1405 7.3775C48.0154 7.84428 47.5356 8.12129 47.0689 7.99622C46.6021 7.87115 46.3251 7.39135 46.4501 6.92457L46.7952 5.63667L46.8276 5.51593L46.7068 5.48357L45.4231 5.1396C44.9564 5.01453 44.6793 4.53473 44.8044 4.06795C44.9295 3.60117 45.4093 3.32416 45.8761 3.44923L47.1598 3.7932L47.2805 3.82556L47.3129 3.70481L47.658 2.41691C47.783 1.95013 48.2628 1.67312 48.7296 1.79819C49.1964 1.92327 49.4734 2.40306 49.3483 2.86985L49.0032 4.15775Z"
                      fill="#7A7A9D"
                      stroke="white"
                      strokeWidth="0.25"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1269:1979">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(52.7979 2.07031) rotate(105)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>Giỏ hàng của bạn trống!</p>
                <Link to="/account/login">Đăng nhập / Đăng ký</Link>
                <Link to="">Mua hàng</Link>
              </div>
            </div>
          </div>
          <div className="menu-category" onClick={handleToggleMenu}>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 2.01399V0.356445H22.0001V2.01399H0ZM0
																	 19.6442V17.9866H22.0001V19.6442H0ZM22.0001 9.17154H0V10.8291H22.0001V9.17154Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

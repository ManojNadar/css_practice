import React from "react";
import "../Styles/Store.css";
import { FaFilter } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { CiCalendar, CiLocationOn } from "react-icons/ci";

const Store = () => {
  return (
    <>
      <div className="respFiltCart">
        <h3>Filter</h3>
        <h3>Cart</h3>
      </div>
      <div className="storeMainContainer">
        <div className="leftStoreContainer">
          <div className="filterNav">
            <h3>FILTERS</h3>
            <div className="filterIcon">
              <FaFilter />
            </div>
          </div>

          <div className="cost">
            <h3>Cost</h3>

            <div className="checkBoxMainContainer">
              <div className="checkBoxSingle">
                <input type="checkbox" />
                <p>Rs. 1500-4000</p>
              </div>
              <div className="checkBoxSingle">
                <input type="checkbox" />
                <p>Rs. 4001-7000</p>
              </div>
              <div className="checkBoxSingle">
                <input type="checkbox" />
                <p>Rs. 7001+</p>
              </div>
            </div>
          </div>
          <div className="color">
            <h3>Color</h3>

            <div className="colorMainContainer">
              <div className="allSingleColor" id="red"></div>
              <div className="allSingleColor" id="blue"></div>
              <div className="allSingleColor" id="green"></div>
              <div className="allSingleColor" id="yellow"></div>
              <div className="allSingleColor" id="pink"></div>
            </div>
          </div>

          <div className="cost">
            <h3>Design Templates</h3>

            <div className="checkBoxMainContainer">
              <div className="checkBoxSingle">
                <input type="checkbox" />
                <p>2</p>
              </div>
              <div className="checkBoxSingle">
                <input type="checkbox" />
                <p>3</p>
              </div>
              <div className="checkBoxSingle">
                <input type="checkbox" />
                <p>+</p>
              </div>
            </div>
          </div>

          <div className="cost">
            <h3>Type</h3>

            <div className="checkBoxMainContainer">
              <div className="checkBoxSingle">
                <input type="checkbox" />
                <p>Loafers</p>
              </div>
              <div className="checkBoxSingle">
                <input type="checkbox" />
                <p>Sneakers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="centerStoreContainer">
          <div className="centernav">
            <div className="centerLeftNav">
              <h2>Shoes</h2>
            </div>
            <div className="centerRightNav">
              <div className="searchIcon">
                <AiOutlineSearch />
              </div>
              <button>Sort By</button>
            </div>
          </div>

          <div className="centermainSection">
            <div className="singleProductContainer">
              <div className="singleProdImage">
                <img
                  src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg"
                  alt=""
                />
              </div>

              <div className="singleProdDetails">
                <h3>KSL 01</h3>

                <div className="singleProdDetailsLast">
                  <p>Rs.2000/-</p>
                  {/*  {/* <p>* * * * * </p> */}
                </div>
              </div>
            </div>
            <div className="singleProductContainer">
              <div className="singleProdImage">
                <img
                  src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00097f2522784e6d96b0aba400aa87a1_9366/Daily_3.0_Shoes_Grey_FW3270_01_standard.jpg"
                  alt=""
                />
              </div>

              <div className="singleProdDetails">
                <h3>KSW 01</h3>

                <div className="singleProdDetailsLast">
                  <p>Rs.2500/-</p>
                  {/* <p>* * * * * </p> */}
                </div>
              </div>
            </div>
            <div className="singleProductContainer">
              <div className="singleProdImage">
                <img
                  src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/505b6a0aae264129bc4cae92011007b9_9366/Daily_3.0_Shoes_White_GX1752_01_standard.jpg"
                  alt=""
                />
              </div>

              <div className="singleProdDetails">
                <h3>Royal S 01</h3>

                <div className="singleProdDetailsLast">
                  <p>Rs.6000/-</p>
                  {/* <p>* * * * * </p> */}
                </div>
              </div>
            </div>
            <div className="singleProductContainer">
              <div className="singleProdImage">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Y2dgY6c7nwovSbFfJlaQqOd9g3KGdhu2Dg&usqp=CAU"
                  alt=""
                />
              </div>

              <div className="singleProdDetails">
                <h3>KSL 01</h3>

                <div className="singleProdDetailsLast">
                  <p>Rs.2000/-</p>
                  {/* <p>* * * * * </p> */}
                </div>
              </div>
            </div>
            <div className="singleProductContainer">
              <div className="singleProdImage">
                <img
                  src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3d0933f855c445fea224aad600bac8b7_9366/Superstar_Shoes_White_EG4958_09_standard.jpg"
                  alt=""
                />
              </div>

              <div className="singleProdDetails">
                <h3>KSW 01</h3>

                <div className="singleProdDetailsLast">
                  <p>Rs.2500/-</p>
                  {/* <p>* * * * * </p> */}
                </div>
              </div>
            </div>
            <div className="singleProductContainer">
              <div className="singleProdImage">
                <img
                  src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-134270,resizemode-75,msid-101364519/top-trending-products/lifestyle/top-7-adidas-sneakers-for-men-starting-at-rs-2253.jpg"
                  alt=""
                />
              </div>

              <div className="singleProdDetails">
                <h3>Royal S 01</h3>

                <div className="singleProdDetailsLast">
                  <p>Rs.6000/-</p>
                  {/* <p>* * * * * </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightStoreContainer">
          <div className="rightNav">
            <h3>CART</h3>

            <div className="cartIcon">
              <BsFillCartCheckFill />
            </div>
          </div>

          <div className="rightMainBody">
            <p>What's stopping you, designer?</p>
          </div>

          <div className="rightLastSection">
            <div className="rightLastDown">
              <div>
                <CiLocationOn />
              </div>
              <p>Home</p>
            </div>
            <div className="rightLastDown">
              <div>
                <CiCalendar />
              </div>
              <p>Select Date</p>
            </div>
          </div>

          <div className="orderNow">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;

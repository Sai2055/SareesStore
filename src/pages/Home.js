import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import BlogPost from "../components/BlogPost";
import FeaturedProduct from "../components/FeaturedProduct";
import Footer from "../components/Footer";
import HomeImageGalary from "../components/HomeImageGalary";
import { images } from "../constants/HeaderNavElements";
import { useCarosal } from "../reusableComponents/Carosal";
import ProductCardCarosal from "../reusableComponents/ProductCardCarosal";
import AllProductsList from "./AllProductList";

import "./Home.css";
export default function Home() {
  let current = useCarosal(images);
  const { entities, womenProducts } = useSelector((state) => state.products);
  // console.log("galaryImages", entities);

  return (
    <div className="home-container">
      <div
        className="Image-Container"
        style={{
          backgroundImage: `url(${images[current]})`,
          height: "85vh",
          backgroundSize: "contain",
          backgroundPosition: "center",
          // backgroundRepeat: "no-repeat", // 👈 prevents tiling
        }}
      ></div>
      <div className="galary-img-container">
        <div className="collection-head-des">
          <div className="galary-heading">SILK COLLECTION</div>
          <div className="galary-description">
            Explore the best trends for girls and women at SaleHub! Clothes,
            shoes and cool accessories for a new season are available now at
            SaleHub online.
          </div>
        </div>
        <div className="Collection-highlight">
          {entities.length > 45 && (
            <>
              <div className="big-Img">
                <img src={entities[5].image} alt="" className="imgae-size" />
                <div className="big-img-description">
                  <div className="title">{entities[5].title.toUpperCase()}</div>
                  <div>Price: {entities[5].price}</div>
                  <button>SHOP THE COLLECTION</button>
                  <div className="btn-border"></div>
                </div>
              </div>

              <div className="small-Img">
                <div className="small-img1">
                  <img src={entities[26].image} alt="" className="imgae-size" />
                  <div className="big-img-description1">
                    <div>{entities[26].title.toUpperCase()}</div>
                    <div>Price: {entities[26].price}</div>
                    <button>SHOP THE COLLECTION</button>
                    <div className="btn-border1"></div>
                  </div>
                </div>

                <div className="small-img2">
                  <img src={entities[22].image} alt="" className="imgae-size" />
                  <div className="big-img-description2">
                    <div>{entities[22].title.toUpperCase()}</div>
                    <div>Price: {entities[22].price}</div>
                    <button>SHOP THE COLLECTION</button>
                    <div className="btn-border1"></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="ProductCards-title">
        WE LOVE
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
      <ProductCardCarosal prop={womenProducts} />
      <div className="ProductCards-title1">FEATURED PRODUCT</div>
      <div className="featuredProductsContainer">
        <FeaturedProduct />
      </div>
      <HomeImageGalary />
      <BlogPost />
      <Footer />
    </div>
  );
}

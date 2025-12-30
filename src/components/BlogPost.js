import { useSelector } from "react-redux";
import AllProductImage from "../reusableComponents/AllProductImage";
import BlogDescription from "../reusableComponents/BlogDescription";
import "./BlogPost.css";
export default function BlogPost() {
  const { kidsProducts } = useSelector((state) => state.products);
  const kidGalaryImages = kidsProducts.slice(4, 8);
  return (
    <div className="blogPost-container">
      <div className="blog-header">FROM OUR BLOG</div>
      <div className="blogPost-body">
        {kidGalaryImages.map((g) => (
          <div className="kidGalary-card">
            <AllProductImage prop={g} />
            <BlogDescription />
          </div>
        ))}
      </div>
    </div>
  );
}

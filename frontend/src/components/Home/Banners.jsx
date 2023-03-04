import { Link } from "react-router-dom";
const Banners = () => {
  return (
    <div>
      <div className="container">
        <div className=" xl:flex  xl:h-[600px]  my-[30px]">
          <div className="xl:w-[740px] w-full h-auto">
            <Link to="/products/640290d73312810794bd458e">
              <img
                src="/images/banners/banner-1.png"
                alt=""
                className="w-full h-full max-w-full"
              />
            </Link>
          </div>
          <div className="flex flex-row flex-1 xl:flex-col">
            <div className="w-full xl:h-1/2">
              <Link to="/products/6402976d326e3bf5f79a5dd2">
                <img
                  src="/images/banners/banner-2.png"
                  className="object-cover w-full"
                  alt="banner"
                />
              </Link>
            </div>
            <div className="w-full xl:h-1/2 ">
              <Link to="/products/64029911326e3bf5f79a5def">
                <img
                  src="/images/banners/banner-3.png"
                  className="object-cover w-full"
                  alt="banner"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banners;

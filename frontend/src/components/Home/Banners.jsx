const Banners = () => {
  return (
    <div>
      {/* <div className="container grid grid-cols-[2fr_1fr] my-8 bg-red-200">
        <img
          src="/images/banners/banner-1.png"
          className="object-cover w-full h-full row-span-2"
          alt="banner"
        />

        <img src="/images/banners/banner-2.png" alt="banner" />
        <img src="/images/banners/banner-3.png" alt="banner" />
      </div> */}
      <div className="container">
        <div className=" xl:flex  xl:h-[600px]  my-[30px]">
          <div className="xl:w-[740px] w-full h-auto">
            <a href="/single-product">
              <img
                src="/images/banners/banner-1.png"
                alt=""
                className="w-full max-w-full h-full"
              />
            </a>
          </div>
          <div className="flex-1 flex xl:flex-col flex-row">
            <div className="w-full xl:h-1/2">
              <a href="/single-product">
                <img
                  src="/images/banners/banner-2.png"
                  className="w-full object-cover"
                  alt="banner"
                />
              </a>
            </div>
            <div className="w-full xl:h-1/2 ">
              <a href="/single-product">
                <img
                  src="/images/banners/banner-3.png"
                  className="w-full object-cover"
                  alt="banner"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banners;

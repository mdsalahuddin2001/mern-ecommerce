const Banners = () => {
  return (
    <div>
      {/* <div className="container grid grid-cols-[2fr_1fr] my-8 bg-red-200">
        <img
          src="/images/banners/banner-1.png"
          className="row-span-2 h-full w-full object-cover"
          alt="banner"
        />

        <img src="/images/banners/banner-2.png" alt="banner" />
        <img src="/images/banners/banner-3.png" alt="banner" />
      </div> */}
      <div className="container">
        <div class=" xl:flex  xl:h-[600px]  my-[30px] bg-green-500">
          <div class="xl:w-[740px] w-full h-auto">
            <a href="/single-product">
              <img
                src="/images/banners/banner-1.png"
                alt=""
                class="w-full max-w-full h-full"
              />
            </a>
          </div>
          <div class="flex-1 flex xl:flex-col flex-row">
            <div class="w-full xl:h-1/2">
              <a href="/single-product">
                <img
                  src="/images/banners/banner-2.png"
                  class="w-full object-cover"
                  alt="banner"
                />
              </a>
            </div>
            <div class="w-full xl:h-1/2 ">
              <a href="/single-product">
                <img
                  src="/images/banners/banner-3.png"
                  class="w-full object-cover"
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

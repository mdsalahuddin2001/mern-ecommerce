const ProductLoader = () => {
  return (
    <div className=" shadow-cardShadow rounded-md p-4 max-w-sm w-full mx-auto bg-white">
      <div className="animate-pulse space-y-4">
        <div className="flex items-center justify-center">
          <div className="w-48 h-48 rounded bg-slate-200"></div>
        </div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductLoader;

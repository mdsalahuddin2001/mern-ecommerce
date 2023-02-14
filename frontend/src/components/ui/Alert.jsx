const Alert = ({ type = "success", children, className }) => {
  return (
    <div
      className={`px-4 py-3 rounded-[4px] max-w-[600px] ${
        type === "danger"
          ? "bg-red-100 text-red-600"
          : "bg-green-100 text-green-600"
      } ${className}`}
    >
      {children}
    </div>
  );
};
export default Alert;

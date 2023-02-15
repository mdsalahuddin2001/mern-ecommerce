const Alert = ({ type = "success", children, className }) => {
  return (
    <div
      className={`px-4 py-3 rounded-[4px] max-w-[600px] ${
        type === "danger" ? "bg-red/20 text-red" : "bg-green/20 text-green"
      } ${className}`}
    >
      {children}
    </div>
  );
};
export default Alert;

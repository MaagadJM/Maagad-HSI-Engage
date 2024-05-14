
const Label = ({ children }) => {
  return (
    <label htmlFor="" className="max-w-[25rem] text-sm mlg:text-base">
      {children}
      <span className="text-red-500"> *</span>
    </label>
  );
}

export default Label;
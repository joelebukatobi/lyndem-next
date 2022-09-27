export default function Input({ required, type, placeholder, id, value, onChange, className, name }) {
  return (
    <input
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`h-[5.6rem] border-[.15rem] border-black outline-none text-black px-[1.6rem] rounded-[.2rem] ${className}`}
    />
  );
}

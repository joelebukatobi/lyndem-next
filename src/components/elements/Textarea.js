export default function Textarea({ name, required, type, placeholder, id, value, onChange, className }) {
  return (
    <textarea
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`h-[24rem] border-[.15rem] border-black outline-none text-black pt-[1.6rem]  px-[1.6rem] rounded-[.2rem] ${className}`}
    ></textarea>
  );
}

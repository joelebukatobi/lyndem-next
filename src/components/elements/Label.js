export default function Label({ children, htmlFor, className }) {
  return (
    <label htmlFor={htmlFor} className={`my-[.8rem] text-black] ${className}`}>
      {children}
    </label>
  );
}

export default function Button({ children, className, type, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-[5.6rem] text-[1.6rem] font-[600] rounded-[.2rem] ${className}`}
    >
      {children}
    </button>
  );
}

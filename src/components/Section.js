export default function Section({ children, className }) {
  return (
    <div className={`section flex flex-col md:flex-row items-center gap-x-[4rem] my-[10.4rem] ${className}`}>
      {children}
    </div>
  );
}

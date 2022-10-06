export default function Section({ children, className }) {
  return (
    <div
      className={`section flex flex-col md:flex-row items-center gap-x-[4rem] mt-[8rem] mb-[8rem] md:mt-[16rem] md:mb-[16rem] ${className}`}
    >
      {children}
    </div>
  );
}

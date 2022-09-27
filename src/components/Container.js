export default function Container({ children, className }) {
  return <section className={` container ${className}`}>{children}</section>;
}

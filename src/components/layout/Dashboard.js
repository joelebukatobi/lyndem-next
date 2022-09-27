import Sidebar from '@/components/dashboard/Sidebar';
import Container from '@/components/dashboard/Container';
export default function Dashboard({ children, className }) {
  return (
    <div className="relative flex">
      <Sidebar className={`${className}`} />
      <Container>{children}</Container>
    </div>
  );
}

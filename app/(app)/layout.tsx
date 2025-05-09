import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';  
type Props = {
	children: React.ReactNode;
};
const layout = ({ children }: Props) => {
	return (
		<div>
			<Navbar />
			{children}
      <Footer />
		</div>
	);
};
export default layout;

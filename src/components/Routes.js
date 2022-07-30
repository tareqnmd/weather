import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import NotFound from '../pages/not-found';
import Layout from './Layout';
const index = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default index;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { DefaultLayout } from "./layouts";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
	return (
		<Router>
			<Routes>
				{routes.map((route, i) => {
					const Page = route.component;
					const Layout = DefaultLayout;

					return (
						<Route
							key={i}
							path={route.path}
							element={
								<ModalProvider>
									<Layout>
										<Page />
									</Layout>
								</ModalProvider>
							}
						/>
					);
				})}
			</Routes>
		</Router>
	);
}

export default App;

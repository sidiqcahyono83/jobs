import { Outlet } from "react-router-dom";
import { Nav } from "./nav";

export function RootRoute() {
	return (
		<main className="w-3/5 mx-auto">
			<Nav />
			<section>
				<Outlet />
			</section>
		</main>
	);
}

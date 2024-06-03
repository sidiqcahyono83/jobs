import { Outlet } from "react-router-dom";
import { Nav } from "./nav";

export function RootRoute() {
	return (
		<main className="w-4/5 mx-auto">
			<Nav />
			<section>
				<Outlet />
			</section>
		</main>
	);
}

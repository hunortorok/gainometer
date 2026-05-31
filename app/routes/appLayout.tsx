import { NavLink, Outlet } from "react-router";
import { Button } from "~/components/ui/button";
import { ButtonGroup } from "~/components/ui/button-group";
import { Dumbbell, LayoutDashboard, Plus, SquarePlus } from "lucide-react";

export default function AppLayout() {
  return (
    <div>
      <Outlet />
      <ButtonGroup className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Button asChild size="icon-lg">
          <NavLink to="/">
            <LayoutDashboard />
          </NavLink>
        </Button>
        <Button size="icon-lg">
          <SquarePlus size={36} />
        </Button>
        <Button asChild size="icon-lg">
          <NavLink to="/workouts">
            <Dumbbell />
          </NavLink>
        </Button>
      </ButtonGroup>
    </div>
  );
}

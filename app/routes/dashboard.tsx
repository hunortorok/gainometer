import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gainometer - Dashboard" },
    {
      name: "description",
      content: "Manage your workouts and track your progress.",
    },
  ];
}

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome to your dashboard! Here you can manage your workouts and track
        your progress.
      </p>
    </div>
  );
}

import type { Route } from "./+types/workoutList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gainometer - Workouts" },
    { name: "description", content: "View and manage your workouts." },
  ];
}

export default function WorkoutList() {
  return (
    <div>
      <h1>Workout List</h1>
      <p>This is the workout list page. It will display all your workouts.</p>
    </div>
  );
}

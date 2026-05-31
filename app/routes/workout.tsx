import type { Route } from "./+types/workout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gainometer - Workout" },
    { name: "description", content: "View and manage your workout details." },
  ];
}

export default function WorkoutEditor() {
  return (
    <div>
      <h1>Workout</h1>
      <p>This is where a workout can be viewed in more detail.</p>
    </div>
  );
}

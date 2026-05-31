import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/appLayout.tsx", [
    index("routes/dashboard.tsx"),
    ...prefix("workouts", [
      index("routes/workoutList.tsx"),
      route(":workoutId", "routes/workout.tsx"),
      route(":workoutId/edit?", "routes/workoutEditor.tsx"),
    ]),
  ]),
] satisfies RouteConfig;

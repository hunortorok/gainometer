import type { Route } from "./+types/workoutEditor";
import * as z from "zod/v4";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import * as data from "../../workout.json";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "~/components/ui/input-group";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useState } from "react";
import {
  CalendarIcon,
  ChevronDownIcon,
  Copy,
  InfoIcon,
  Save,
  Trash,
} from "lucide-react";
import { Calendar } from "~/components/ui/calendar";
import { Separator } from "~/components/ui/separator";
import { Badge } from "~/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gainometer - Workout Editor" },
    { name: "description", content: "Create and edit your workouts." },
  ];
}

const formSchema = z.object({
  // Change to UUID
  workoutId: z.string(),
  workoutName: z.string(),
  date: z.iso.date(),
  exercises: z
    .object({
      exerciseId: z.string(),
      exerciseName: z.string(),
      exerciseVariation: z.string().array(),
      sets: z
        .object({
          setId: z.string(),
          index: z.number(),
          reps: z.number(),
          weight: z.number(),
        })
        .array(),
    })
    .array(),
});

function WorkoutForm() {
  const { handleSubmit, control, watch } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // workoutId: data?.id,
      workoutName: data?.name,
      date: z.iso.date().parse(data?.date),
    },
  });

  const date = watch("date");
  console.log("form values", watch());

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <Card className="w-full sm:max-w-md">
      <form id="workout-form" onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <FieldGroup className="flex gap-2">
            <CardTitle>
              <Controller
                name="workoutName"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      {...field}
                      id="workoutName"
                      type="text"
                      placeholder="Workout Name"
                    />
                  </Field>
                )}
              />
            </CardTitle>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!date}
                  className="w-53 justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                >
                  {date ? (
                    format(new Date(date), "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Controller
                  name="date"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Calendar
                      {...field}
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      defaultMonth={
                        field.value ? new Date(field.value) : undefined
                      }
                      onSelect={(date) => {
                        field.onChange(date ? format(date, "yyyy-MM-dd") : "");
                      }}
                    />
                  )}
                />
              </PopoverContent>
            </Popover>
          </FieldGroup>
        </CardHeader>
        <Separator className="my-4" />
        <CardContent>
          <Card>
            <CardHeader>
              <CardTitle>
                <Field>
                  <Input
                    // {...field}
                    id="exerciseName"
                    type="text"
                    placeholder="Exercise Name"
                  />
                </Field>
              </CardTitle>
              <CardDescription className="flex flex-row gap-0.5 items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon size={16} />
                  </TooltipTrigger>
                  <TooltipContent>
                    Use a label to specify an exercise variation. Ex: Standing,
                    Incline, Supinated, etc.
                  </TooltipContent>
                </Tooltip>
                <Badge
                  variant="outline"
                  className="hover:cursor-pointer text-gray-500"
                >
                  + Label
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Exercise form goes here */}

              <p>This is where you can add exercises to your workout.</p>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button aria-label="Delete Workout" variant="destructive">
            <Trash />
          </Button>
          <Button aria-label="Make Copy of Workout" variant="secondary">
            <Copy />
          </Button>
          <Button aria-label="Save workout" type="submit">
            <Save />
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default function WorkoutEditor() {
  return (
    <div>
      <h1>Workout Editor</h1>
      <p>
        This is the workout editor page. Here you can create and edit your
        workouts.
      </p>
      <WorkoutForm />
    </div>
  );
}

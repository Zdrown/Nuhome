import { ScheduleForm } from "@/components/schedule/ScheduleForm"

export default function SchedulePage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6 max-w-2xl">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Schedule Your Move
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the form below to get started with your stress-free move.
          </p>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <ScheduleForm />
        </div>
      </div>
    </div>
  )
}

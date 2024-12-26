import { Skeleton } from "./ui/skeleton"

const WeatherSkeleton = () => {
  return (
    <div className="space-y-6 gap-3">
        <div className="grid gap6">
          <Skeleton className="h-[300px] w-full rounded-lg mb-6  " />
          <Skeleton className="h-[300px] w-full rounded-lg " />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-[300px] w-full rounded-lg " />
          <Skeleton className="h-[300px] w-full rounded-lg " />
        </div>
    </div>
  )
}

export default WeatherSkeleton
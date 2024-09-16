import { Dialog } from './assets/componets/ui/dialog'
import { CreateGoal } from './assets/componets/create-goal'
import { EmptyGoals } from './assets/componets/empty-goals'
import { Summary } from './assets/componets/summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'



export function App() {
  const { data } = useQuery({
  queryKey: ['summary'],
  queryFn: getSummary,
})
  

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}

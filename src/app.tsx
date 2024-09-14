import { Dialog } from './assets/componets/ui/dialog'
import { CreateGoal } from './assets/componets/create-goal'
import { EmptyGoals } from './assets/componets/empty-goals'
import { Summary } from './assets/componets/summary'

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}

import { Button } from './components/ui/button'

export const App = () => {
  return (
    <div>
      <Button variant="primary" as="a" href={'/link'}></Button>
    </div>
  )
}

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { FormSearchGyms } from './components/formSearchGyms'
import { Wrapper } from './styles/Wrapper'

function App() {
  return (
    <div className="relative">
      <Header />
      <Wrapper>
        <FormSearchGyms />
      </Wrapper>
      <Footer />
    </div>
  )
}

export default App

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { FormSearchGyms } from './components/formSearchGyms'
import { Wrapper } from './styles/Wrapper'

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <FormSearchGyms />
      </Wrapper>
      <Footer />
    </>
  )
}

export default App

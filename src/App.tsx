import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Colors from './Theme/colors'

import EstiloGlobal, { Container } from './style'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={Colors}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App

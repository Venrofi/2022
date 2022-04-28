import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Card from './components/Card'
import {Container} from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import content from './content'
import Footer from './components/Footer'
import CallToAction from './components/CallToAction'

const theme = {
  colors: {
    white: '#fff',
    primary_pink: 'hsl(322, 100%, 66%)',
    primary_light_pink: 'hsl(321, 100%, 78%)',
    primary_light_red: 'hsl(0, 100%, 63%)',
    neutral_dark_cyan: 'hsl(192, 100%, 9%)',
    neutral_pale_blue: 'hsl(207, 100%, 98%)'
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles/>

        <Header/>

        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>

        <CallToAction />
        
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FeeForm from './FeeForm'

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">
      <Container style={{
        paddingTop: 100
      }}>
        <Row>
          <Col><FeeForm /></Col>
        </Row>
      </Container>
    </ThemeProvider >
  );
}

export default App;

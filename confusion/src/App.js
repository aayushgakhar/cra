import './App.css';
import Navbar from './components/navbar'

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  // { name: 'Calendar', href: '#', current: false },
]

function App() {
  return (
    <div className="App">
      <Navbar navigation={navigation}/>
      
    </div>
  );
}

export default App;

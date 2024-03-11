import MainNavbar from './components/mainNavbar'; // Corrected import statement
import Settings from './routes/settings';
import News from './components/news';


function App() {
  return (
    <div className="App">
      <News /> {/* Corrected usage */}
    </div>
  );
}

export default App;

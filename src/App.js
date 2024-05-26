
import Header from './componence/Header'
import Pruducts from './componence/Pruducts'
function App() {
  const p ='Hello everyone'
  const d ='5'
return(
    <div className="App">
     <Header message={p}/>
     <Pruducts pruductNulber={d}/>
    </div>
)
}

export default App;

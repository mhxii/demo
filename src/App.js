import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from './components/Greeting';
import Team from './components/Team';
import Movies from './components/Movie';
import Counter from './components/Counter';
import Tweet from './components/Tweet';
import Myform from './components/Myform';

const teams =[
  {
    name : "Real Madrid",
    LDC : 14,
    pays : "Spain"
  },
  {
    name : "PSG",
    LDC : 0,
    pays : "France"
  },
  {
    name : "Notthingham",
    LDC : 2,
    pays : "England"
  }
  
];

const movies=[
  {
    id: 1,
    title: "Legende d'Automne",
    release: 1987
  },
  {
    id: 2,
    title: "Identity",
    release: 1998
  },
  {
    id: 3,
    title: "La Faille",
    release: 2003
  }
];

function App() {

  return (
    // <table class="table table-striped">
    //   <thead>
    //     <tr>
    //       <th scope="col">ID</th>
    //       <th scope="col">TITLE</th>
    //       <th scope="col">RELEASE</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {movies.map(movie => (
    //       <Movies id={movie.id} title={movie.title} release={movie.release}/>
    //     ))}
    //   </tbody>
    // </table>
    <div>
      {/* <Tweet name={"Java"} comment={"Difficile"}/>
      <Tweet name={"Mongo"} comment={"Facile"}/>
      <Tweet name={"React"} comment={"Facile"}/> */}
      <Myform />
    </div>
    
  );

  
}


export default App;

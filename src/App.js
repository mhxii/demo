import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from './components/Greeting';
import Team from './components/Team';

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
function App() {

  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">NAME</th>
          <th scope="col">LDC</th>
          <th scope="col">PAYS</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(team => (
          <Team name={team.name} ldc={team.LDC} country={team.pays}/>
        ))}
      </tbody>
    </table>
  );
}


export default App;

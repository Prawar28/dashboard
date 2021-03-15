import './App.css';
import * as s from './App.styles';

import Sidebar from './Compnonets/Sidebar/Sidebar.js';
import MainView from './Compnonets/MainView/MainView.js';

function App() {

  const menuItem = [
    {name: 'Dashboard', to: '/', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxgdwZPHM5ZSXSUdjovCbv-IROtWPspf7kQ&usqp=CAU'},
    {name: 'Assets', to: '/Assets', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QjaK_YIVAgE458aLuA-wFwBrfXP0ac6dcA&usqp=CAU'},
    {name: 'Tracker', to: '/Tracker', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcQjj1vNZ8HCf-a4DsSt7-A6oKALvAJxpag&usqp=CAU'},
    {name: 'Planning & Advisory', to: '/Planning', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUg5rGtVnUejdUL0ESm6AoFwa1PKarrDHTQ&usqp=CAU'}
  ]
  return (
    <s.App>

      <Sidebar menuItem={menuItem}/>
      <MainView />
    </s.App>
  );
}

export default App;

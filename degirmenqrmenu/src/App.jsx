// App.jsx
import './App.css';
import menu from './assets/menu.json';
import FoodCardComponent from './components/FoodCardComponent';
import LogoComponent from './components/LogoComponent';
import { Accordion } from 'react-bootstrap';

function App() {
  return (
    <>
    <LogoComponent />


      {Object.entries(menu.categories).map(([categoryName, items]) => (

        <div key={categoryName} className='w-100'>
        <Accordion>
        <Accordion.Header>{categoryName}</Accordion.Header>
        <Accordion.Body>
          <div className="food-list">
            {items.map((food) => (
              <FoodCardComponent
                key={food.id}
                src={food.image}
                name_ru={food.name_ru}
                name_kz={food.name_kz}
                description_ru={food.description_ru}
                description_kz={food.description_kz}
                price={food.price}
                bgr={food.bgr}
              />
            ))}
          </div>
          </Accordion.Body>
          </Accordion>
        </div>
        
      ))}

    </>
  );
}

export default App;

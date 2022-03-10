import Counter from './Counter';
import List from './List';
import Todo from './Todo';

const App = () => { 
  const myFaveFoods = ['Oatmeal', 'Chicken', 'Steak',];
  const msg1 = 'My Favorite Foods'

  return(
    <div>
      <Todo/>
      <Counter/>
      <List
        message={msg1}
        items={myFaveFoods}
      />
    </div>
  );
};

export default App;
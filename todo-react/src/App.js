import Counter from './Counter';
import List from './List';

const App = () => { 
  const myFaveFoods = ['Oatmeal', 'Chicken', 'Steak',];
  const myFaveCryptos = ['XRP', 'ALGO', 'XLM',];
  const msg1 = 'My Favorite Foods'
  const msg2 = 'My Favorite Cryptos'

  return(
    <div>
      <Counter/>
      <List
        message={msg1}
        items={myFaveFoods}
      />
      <List
        message={msg2}
        items={myFaveCryptos}
      />
    </div>
  );
};

export default App;
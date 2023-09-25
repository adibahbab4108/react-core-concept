import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Photoshop', price: '$20' },
    { name: 'Illustrator', price: '$30' },
    { name: 'Acrobat', price: '$40' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        {<Counter ></Counter>}
        <Users> </Users>
        <ul>
          {
            products.map(product => <li>{product.name} {product.price}</li>)
          }

        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const { name, price } = props.product;
  const productStyle = {
    border: '1px solid red', borderRadius: '5px', width: '300px', padding: '10px', marginTop: '10px',
  }
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
export default App;

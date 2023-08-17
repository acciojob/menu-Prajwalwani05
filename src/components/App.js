import React, { useState } from "react";
import ReactDOM from "react-dom";
import dishesData from "../data/dishesData";

const App = () => {
  const [menuItems, setMenuItems] = useState(dishesData);
  const [categories, setCategories] = useState([
    "all",
    ...new Set(dishesData.map((item) => item.category)),
  ]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(dishesData);
      return;
    }
    const filteredItems = dishesData.filter(
      (item) => item.category === category
    );
    setMenuItems(filteredItems);
  };

  return (
    <div className="App" id="main">
      <header>
        <h1>Delicious Dishes</h1>
      </header>
      <nav>
  <ul>
    {categories.map((category, index) => (
      <li key={index}>
        <button data-testid={`filter-btn-${index + 1}`} onClick={() => filterItems(category)}>
          {category}
        </button>
      </li>
    ))}
  </ul>
</nav>
      <section className="menu">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <p>{item.category}</p>
                <p className="price">${item.price}</p>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;

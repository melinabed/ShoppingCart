const products = [
  {
    id: 1,
    title: "Fortnite Playstation 5 Controller",
    price: 69.99,
    image: "src/assets/game_controller.JPEG",
  },
  {
    id: 2,
    title: "Ariat Leather Boots",
    price: 149.99,
    image: "src/assets/boots.JPEG",
  },
  {
    id: 3,
    title: "Piyow",
    price: 1636.99,
    image: "src/assets/pillow.JPEG",
  },
  {
    id: 4,
    title: "Plush Collard Shirt",
    price: 18.99,
    image: "src/assets/collard_shirt.JPEG",
  },
  {
    id: 5,
    title: "Casual Button Collard Shirt",
    price: 20.99,
    image: "src/assets/button_up.JPEG",
  },
  {
    id: 6,
    title: "Rough Neck Shirt",
    price: 8.99,
    image: "src/assets/tractor_supply.JPEG",
  },
  {
    id: 7,
    title: "Jujitsu Kaisen Heavy Shirt",
    price: 49.99,
    image: "src/assets/jjk_shirt.JPEG",
  },
  {
    id: 8,
    title: "Houston Rockets Retro Jersey",
    price: 89.99,
    image: "src/assets/hrockets_jersey.JPEG",
  },
];

const ProductList = () => {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          {item.title}
          <img src={item.image} alt={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

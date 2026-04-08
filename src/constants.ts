export const MENU_CATEGORIES = [
  { id: 'sucres', name: 'Kurtos Sucrés', icon: 'Candy' },
  { id: 'sales', name: 'Kurtos Salés', icon: 'Utensils' },
  { id: 'glaces', name: 'Kurtos Glacés', icon: 'IceCream' },
  { id: 'milkshakes', name: 'Milk Shakes', icon: 'CupSoda' },
  { id: 'boxes', name: 'Nos Boxes', icon: 'Package' },
];

export const MENU_ITEMS = {
  sucres: [
    { name: 'Sucre', price: '5.00€', description: 'Le classique croustillant', image: 'https://picsum.photos/seed/kurtos-sugar/400/400' },
    { name: 'Cannelle', price: '5.00€', description: 'Parfumé à la cannelle', image: 'https://picsum.photos/seed/kurtos-cinnamon/400/400' },
    { name: 'Speculos', price: '5.50€', description: 'Éclats de speculos', image: 'https://picsum.photos/seed/kurtos-speculos/400/400', bestSeller: true },
    { name: 'Nutella', price: '5.50€', description: 'Généreux en Nutella', image: 'https://picsum.photos/seed/kurtos-nutella/400/400' },
    { name: 'Framboise', price: '8.50€', description: 'Fraîcheur fruitée', image: 'https://picsum.photos/seed/kurtos-raspberry/400/400' },
    { name: 'Coco', price: '5.50€', description: 'Exotisme de la noix de coco', image: 'https://picsum.photos/seed/kurtos-coconut/400/400', bestSeller: true },
  ],
  sales: [
    { name: 'Chickenos', price: '8.50€', description: 'Poulet croustillant, cheddar, salade, tomates, oignons frits', image: 'https://picsum.photos/seed/kurtos-chicken/400/400', bestSeller: true },
    { name: 'Chevros', price: '8.50€', description: 'Bûches de chèvre, miel, salade, tomates, oignons frits', image: 'https://picsum.photos/seed/kurtos-goat/400/400' },
    { name: 'Raclettos', price: '8.50€', description: 'Fromage à raclette, jambon de dinde, rosties, tomates', image: 'https://picsum.photos/seed/kurtos-raclette/400/400' },
    { name: 'Dogos', price: '7.50€', description: 'Saucisse de volaille, cheddar, salade, oignons frits', image: 'https://picsum.photos/seed/kurtos-hotdog/400/400' },
    { name: 'Americanos', price: '7.50€', description: 'Steak haché, cheddar fondant, simple et efficace', image: 'https://picsum.photos/seed/kurtos-burger/400/400', bestSeller: true },
  ],
  glaces: [
    { name: 'Cookeos', price: '8.00€', description: 'Glace vanille et éclats de cookies', image: 'https://image.noelshack.com/fichiers/2026/15/2/1775575474-chatgpt-image-7-avr-2026-16-59-19.jpg' },
    { name: 'Fraisos', price: '9.50€', description: 'Fraises fraîches et coulis gourmand', image: 'https://image.noelshack.com/fichiers/2026/15/2/1775575474-chatgpt-image-7-avr-2026-16-59-23.png' },
    { name: 'Buenos', price: '8.50€', description: 'Kinder Bueno et chocolat fondant', image: 'https://image.noelshack.com/fichiers/2026/15/2/1775574856-chatgpt-image-7-avr-2026-17-01-46.jpg', bestSeller: true },
    { name: 'Oreos', price: '8.50€', description: 'Le classique Oreo revisité', image: 'https://image.noelshack.com/fichiers/2026/15/2/1775574856-chatgpt-image-7-avr-2026-17-02-48.jpg' },
    { name: 'Cocos', price: '8.50€', description: 'Noix de coco et douceur lactée', image: 'https://image.noelshack.com/fichiers/2026/15/2/1775574855-chatgpt-image-7-avr-2026-17-12-39.png' },
    { name: 'Pistachios', price: '9.50€', description: 'Pistache intense et croquante', image: 'https://image.noelshack.com/fichiers/2026/15/2/1775574856-chatgpt-image-7-avr-2026-17-11-52.png', bestSeller: true },
  ],
  milkshakes: [
    { name: 'Oreo Shake', price: '5.50€', description: 'Boules de vanille et éclats d\'Oreo', image: 'https://picsum.photos/seed/shake-oreo/400/400' },
    { name: 'Bueno Shake', price: '5.50€', description: 'Boules de vanille et Kinder Bueno', image: 'https://picsum.photos/seed/shake-bueno/400/400', bestSeller: true },
    { name: 'Fraiso Shake', price: '5.50€', description: 'Boules de vanille et fraises fraîches', image: 'https://picsum.photos/seed/shake-strawberry/400/400' },
  ],
  boxes: [
    { name: 'Boxe Sucrée', price: '10.00€', description: 'Assortiment de 4 mini Kurtos au Nutella', image: 'https://picsum.photos/seed/box-sweet/400/400', bestSeller: true },
    { name: 'Boxe Salée', price: '12.00€', description: 'Assortiment de bouchées salées artisanales', image: 'https://picsum.photos/seed/box-salty/400/400' },
  ],
};

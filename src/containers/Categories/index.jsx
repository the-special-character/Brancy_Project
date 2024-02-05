import React from 'react';
import Card from './card';
import '../../style.css';

const categories = [
  {
    id: 1,
    badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp',
    className: '',
    title: 'Skin Care',
  },
  {
    id: 2,
    badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp',
    className: '',
    title: 'Skin Care',
  },
  {
    id: 3,
    badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp',
    title: 'Skin Care',
  },
  {
    id: 4,
    badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp',
    title: 'Skin Care',
  },
  {
    id: 5,
    badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp',
    title: 'Skin Care',
  },
  {
    id: 6,
    badge: 'new',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp',
  },
];

function Categories() {
  return (
    <section
      id="categories"
      className="px-sm-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
    >
      {categories.map(x => (
        <Card key={x.id} {...x} />
      ))}
    </section>
  );
}

export default Categories;

import React from 'react';
import Card from './card';
import '../../style.css';

function Categories() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center w-full h-auto gap-4">
        <Card
          title="Hair Care"
          badge="new"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp"
          className="flex-grow flex-shrink-0 bg-red-200 flip-container basis-44"
        />
        <Card
          title="Skin Care"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/2.webp"
          className="flex-grow flex-shrink-0 bg-green-200 basis-44"
        />
        <Card
          title="Lip Stick"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/3.webp"
          className="flex-grow flex-shrink-0 bg-blue-200 basis-44"
        />
        <Card
          title="Face Skin"
          badge="sale"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/4.webp"
          className="flex-grow flex-shrink-0 bg-orange-200 basis-44"
        />
        <Card
          title="Blusher"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/5.webp"
          className="flex-grow flex-shrink-0 bg-blue-200 basis-44"
        />
        <Card
          title="Natural"
          imageUrl="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/6.webp"
          className="flex-grow flex-shrink-0 bg-orange-200 basis-44"
        />
      </div>
    </div>
  );
}

export default Categories;

import { GlobalResets } from './tokens/resets';
import { GlobalFonts } from './tokens/fonts';
import { GlobalColors } from './tokens/colors';
import { GlobalShadows } from './tokens/shadows';
import { GlobalRadii } from './tokens/radii';
import { SpriteWithIcons } from './tokens/icons';
import { ProductCard } from './elements/product-card';

function App() {
  return (
    <>
      <GlobalResets />
      <GlobalFonts />
      <GlobalColors />
      <GlobalShadows />
      <GlobalRadii />
      <SpriteWithIcons />

      {/* <CategoryCard
        name='Прогулочные'
        amount={189}
        image='/images/categories/1.jpg'
        imageAlt='Красный прогулочный велик'
      /> */}

      <ProductCard
        name='Велик BMC'
        price={94000}
        image='/images/products/1.jpg'
        imageAlt='Серый велик с чёрными ободами'
        hit
        novelty
        discount
      />
      <ProductCard
        name='Велик BMC'
        price={94000}
        image='/images/products/1.jpg'
        imageAlt='Серый велик с чёрными ободами'
        hit
        novelty
        discount
        unavailable
      />
    </>
  );
}

export { App };

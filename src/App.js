import { GlobalResets } from './tokens/resets';
import { GlobalFonts } from './tokens/fonts';
import { GlobalColors } from './tokens/colors';
import { GlobalShadows } from './tokens/shadows';
import { GlobalRadii } from './tokens/radii';
import { SpriteWithIcons } from './tokens/icons';
// import { CategoryCard } from './elements/category-card';
import { NewsCard } from './elements/news-card';

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

      <NewsCard
        name='Велопробег в Москве'
        date='2022-04-02'
        image='/images/news/1.jpg'
        imageAlt='Велопробег в Москве'
      />
    </>
  );
}

export { App };

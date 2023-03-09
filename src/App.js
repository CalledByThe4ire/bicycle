import { GlobalResets } from './tokens/resets';
import { GlobalFonts } from './tokens/fonts';
import { GlobalColors } from './tokens/colors';
import { GlobalShadows } from './tokens/shadows';
import { GlobalRadii } from './tokens/radii';
import { SpriteWithIcons } from './tokens/icons';
import { BannerSize, Banner } from './elements/banner';

function App() {
  return (
    <>
      <GlobalResets />
      <GlobalFonts />
      <GlobalColors />
      <GlobalShadows />
      <GlobalRadii />
      <SpriteWithIcons />

      <Banner
        title='Трековые велики'
        image='/images/banners/1.jpg'
        imageAlt='Чёрный трековый велик на фоне серой стены'
      />
      <Banner
        size={BannerSize.LARGE}
        title='Трековые велики'
        discount='50%'
        image='/images/banners/1.jpg'
        imageAlt='Чёрный трековый велик на фоне серой стены'
      />
    </>
  );
}

export { App };

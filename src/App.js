import { GlobalResets } from './tokens/resets';
import { GlobalFonts } from './tokens/fonts';
import { GlobalColors, Color } from './tokens/colors';
import { GlobalShadows } from './tokens/shadows';
import { GlobalRadii } from './tokens/radii';
import { IconName, SpriteWithIcons } from './tokens/icons';
import { IconButton } from './elements/icon-button';

import { TypographyVariant, Typography } from './elements/typography';

import { Icon } from './elements/icon';

function App() {
  return (
    <>
      <GlobalResets />
      <GlobalFonts />
      <GlobalColors />
      <GlobalShadows />
      <GlobalRadii />
      <SpriteWithIcons />

      <IconButton>
        <Icon name={IconName.HEART_SMALL} />
      </IconButton>
      <IconButton>
        <Icon name={IconName.HEART} />
      </IconButton>
      <IconButton>
        <Icon name={IconName.MENU} />
      </IconButton>

      <Typography as='h1' variant={TypographyVariant.TITLE_1} color={Color.ORANGE_30}>
        Магазин велосипедов «Велик»
      </Typography>
    </>
  );
}

export { App };

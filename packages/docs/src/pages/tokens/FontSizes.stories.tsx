import { Meta } from '@storybook/addon-docs';
import { fontSizes } from '@luna-ui/tokens';
import { TokensGrid } from '../../components/TokensGrid';

<Meta title="Tokens/Font Sizes" />

const FontSizesStory = () => (
	<>
		<h1>Fonts Sizes</h1>
		<TokensGrid tokens={fontSizes} />
	</>
);

export default {
	title: 'Tokens/Font Sizes',
	component: FontSizesStory,
};

export const Default = () => <FontSizesStory />;

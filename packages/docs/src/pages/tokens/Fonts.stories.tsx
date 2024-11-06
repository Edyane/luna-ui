import { Meta } from '@storybook/addon-docs';
import { fonts } from '@luna-ui/tokens';
import { TokensGrid } from '../../components/TokensGrid';

<Meta title="Tokens/Font Families" />

const FontsStory = () => (
	<>
		<h1>Fonts Families</h1>
		<TokensGrid tokens={fonts} />
	</>
);

export default {
	title: 'Tokens/Font Families',
	component: FontsStory,
};

export const Default = () => <FontsStory />;

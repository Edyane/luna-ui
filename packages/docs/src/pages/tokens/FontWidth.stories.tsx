import { Meta } from '@storybook/addon-docs';
import { fontWeights } from '@luna-ui/tokens';
import { TokensGrid } from '../../components/TokensGrid';

<Meta title="Tokens/Font Weights" />

const FontWeightsStory = () => (
	<>
		<h1>Fonts Weights</h1>
		<TokensGrid tokens={fontWeights} />
	</>
);

export default {
	title: 'Tokens/Font Weights',
	component: FontWeightsStory,
};

export const Default = () => <FontWeightsStory />;

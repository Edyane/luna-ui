import { Meta } from '@storybook/addon-docs';
import { lineHeights } from '@luna-ui/tokens';
import { TokensGrid } from '../../components/TokensGrid';

<Meta title="Tokens/Line Heights" />

const LineHeightsStory = () => (
	<>
		<h1>Line Heights</h1>
		<TokensGrid tokens={lineHeights} />
	</>
);

export default {
	title: 'Tokens/Line Heights',
	component: LineHeightsStory,
};

export const Default = () => <LineHeightsStory />;

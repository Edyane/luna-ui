import { Meta } from '@storybook/addon-docs';
import { radii } from '@luna-ui/tokens';
import { TokensGrid } from '../../components/TokensGrid';

<Meta title="Tokens/Radii" />

const RadiiStory = () => (
	<>
		<h1>Radii</h1>
		<TokensGrid tokens={radii} />
	</>
);

export default {
	title: 'Tokens/Radii',
	component: RadiiStory,
};

export const Default = () => <RadiiStory />;

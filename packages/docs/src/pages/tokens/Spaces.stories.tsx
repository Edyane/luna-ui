import { Meta } from '@storybook/addon-docs';
import { space } from '@luna-ui/tokens';
import { TokensGrid } from '../../components/TokensGrid';

<Meta title="Tokens/Spaces" />

const SpacesStory = () => (
	<>
		<h1>Spaces</h1>
		<TokensGrid tokens={space} />
	</>
);

export default {
	title: 'Tokens/Spaces',
	component: SpacesStory,
};

export const Default = () => <SpacesStory />;


import { Meta } from '@storybook/addon-docs';
import { colors } from '@luna-ui/tokens';
import { TokensGrid } from '../../components/TokensGrid';

<Meta title="Tokens/Colors" />

const groupColorsByType = (colors: Record<string, string>) => {
	const grouped: Record<string, Record<string, string>> = {};

	Object.entries(colors).forEach(([key, value]) => {
		const match = key.match(/^[a-zA-Z]+/);
		const type = match ? match[0] : "unknown";
		if (!grouped[type]) {
			grouped[type] = {};
		}
		grouped[type][key] = value;
	});

	return grouped;
};

const ColorPaletteStory = () => {
	const groupedColors = groupColorsByType(colors);

	return (
		<>
			<h1>Colors</h1>
			{Object.entries(groupedColors).map(([group, tokens]) => (
				<div key={group}>
					<h2>{group}</h2>
					<TokensGrid tokens={tokens} />
				</div>
			))}
		</>
	);
};

export default {
	title: 'Tokens/Colors',
	component: ColorPaletteStory,
};

export const Default = () => <ColorPaletteStory />;

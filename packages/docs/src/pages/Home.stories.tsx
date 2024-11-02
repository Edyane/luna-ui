import { Meta } from '@storybook/addon-docs';

<Meta title="Home" />

const HomeStory = () => (
  <>
    <h1>Ignite UI</h1>
    <p>Design System do Ignite.</p>
  </>
);

export default {
  title: 'Home',
  component: HomeStory,
};

export const Default = () => <HomeStory />;

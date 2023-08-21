import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { Subtitle } from '@core/Typography';

import { ProgressBar } from '.';

export default {
  title: 'Core/Progress/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progressColor: {
      control: 'color',
    },
    progressBackground: {
      control: 'color',
    },
    customTitle: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ProgressBar>;

type Story = StoryObj<typeof ProgressBar>;

export const Default = {
  args: {
    value: 25,
  },
} satisfies Story;

export const CustomTitle: StoryFn<typeof ProgressBar> = () => {
  const StyledProgressInfo = styled(Subtitle)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 19px;
    margin-bottom: 15px;

    > span:last-of-type {
      color: ${({ theme }) => (theme.type === 'light' ? 'black' : 'white')};
    }
  `;

  const value = 33;

  const Title = (
    <StyledProgressInfo level={3} tag="span">
      <span>{value}%</span> <span>Update in progress..</span>
    </StyledProgressInfo>
  );

  return <ProgressBar value={value} customTitle={Title} />;
};
CustomTitle.parameters = {};

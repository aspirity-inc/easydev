import { ClearIndicatorProps, GroupBase } from 'react-select';

import { StyledClearIndicator } from '../styles.ts';

const CustomClearText = () => <>Delete all</>;
export const ClearIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>
) => {
  const {
    children = <CustomClearText />,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref}>
      <StyledClearIndicator>{children}</StyledClearIndicator>
    </div>
  );
};

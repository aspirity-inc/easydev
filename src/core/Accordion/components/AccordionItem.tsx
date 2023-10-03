import { Box } from '@core/Box';

import type { AccordionItemProps } from '../types';

export const AccordionItem = ({ children, ...props }: AccordionItemProps) => {
  return (
    <Box className="easy_accordion-item" {...props}>
      {children}
    </Box>
  );
};

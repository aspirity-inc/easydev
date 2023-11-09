import { Title, Pagination, Flex } from '@aspirity/easydev';
import { Feedback } from './Feedback/Feedback';
import { useState } from 'react';
import { StyledPaginationInfo } from './styles';
import { generateLongFeedbacksArray } from '@src/assets/data/feedbacks';

export const Feedbacks = () => {
  const data = generateLongFeedbacksArray(15);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <section style={{ marginBottom: 96, width: 1020 }}>
      <Title variant="h3" style={{ marginBottom: 48 }}>
        Feedbacks
      </Title>

      <Flex direction="column" gap={40} style={{ marginBottom: 40 }}>
        {currentItems.map((item) => (
          <Feedback key={item.id} item={item} />
        ))}
      </Flex>

      <Flex direction="column" gap={8}>
        <Pagination page={page} onChange={setPage} total={totalPages} siblings={1} withEdges={true} />
        <StyledPaginationInfo>
          {indexOfFirstItem + 1}-{indexOfLastItem} of {data.length} items
        </StyledPaginationInfo>
      </Flex>
    </section>
  );
};

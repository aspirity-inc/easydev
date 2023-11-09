import { Title, Pagination, Flex, Center } from '@easydev';
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
    <section className="mb-[96px]">
      <Title variant="h3" className="mb-[48px]">
        Feedbacks
      </Title>

      <Flex direction="column" gap={40} className="mb-[40px]">
        {currentItems.map((item) => (
          <Feedback key={item.id} item={item} />
        ))}
      </Flex>

      <Flex direction="column" gap={8}>
        <Pagination
          page={page}
          onChange={setPage}
          total={totalPages}
          siblings={1}
          withEdges={true}
        />
        <StyledPaginationInfo>
          {indexOfFirstItem + 1}-{indexOfLastItem} of {data.length}{' '}
        </StyledPaginationInfo>
      </Flex>
    </section>
  );
};

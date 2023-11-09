import { Button, Flex, Title, Card, Text, Checkbox } from '@aspirity/easydev';
import { CheckboxWrapper, StyledBadge } from './styles';
import { ChangeEvent, useState } from 'react';
import { Tabs } from '@src/pages/AdsPage/components/Tabs/Tabs';
import { AdsSelect } from '@src/pages/AdsPage/components/AdsSelect/AdsSelect';
import { ads } from '@src/assets/data/adsCards';

export const AdsSection = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const selectAllRows = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = ads.map((item) => Number(item.id));
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const selectItem = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelectedIds: number[];

    if (selectedIndex === -1) {
      newSelectedIds = [...selected, id];
    } else {
      newSelectedIds = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(newSelectedIds);
  };

  return (
    <section style={{ marginBottom: 72, maxWidth: 1020 }}>
      <Title variant="h3" style={{ marginBottom: 32 }}>
        My ads
      </Title>
      <Tabs />
      <Flex gap={16} style={{ marginBottom: 40 }}>
        <Checkbox
          checked={ads.length > 0 && selected.length === ads.length}
          onChange={selectAllRows}
        />
        <AdsSelect />
      </Flex>
      <CheckboxWrapper>
        <Flex
          direction="column"
          align="flex-start"
          gap={24}
          style={{ width: '100%' }}
        >
          {ads.map((ad) => {
            const AdsCard = (
              <Card
                variant="shadow"
                media={<img src={ad.img} />}
                direction="row"
              >
                <Flex
                  direction="column"
                  align="flex-start"
                  gap={12}
                  style={{ marginBottom: 16 }}
                >
                  <StyledBadge size="sm">{ad.tag}</StyledBadge>
                  <Title variant="h5">{ad.name}</Title>
                  <Text variant="body2">{ad.description}</Text>
                  <Text variant="caption">{ad.date}</Text>
                </Flex>
                <Flex gap={16}>
                  <Button rounded="sm" style={{ height: 40 }}>
                    Public
                  </Button>
                  <Button
                    rounded="sm"
                    style={{ height: 40 }}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                      </svg>
                    }
                  />
                </Flex>
              </Card>
            );

            return (
              <Checkbox
                key={ad.id}
                checked={isSelected(Number(ad.id))}
                onChange={() => selectItem(Number(ad.id))}
                label={AdsCard}
                checkboxLabelWrapProps={{ style: { width: '100%' } }}
                checkboxContainerProps={{ style: { width: '100%' } }}
              />
            );
          })}
        </Flex>
      </CheckboxWrapper>
    </section>
  );
};

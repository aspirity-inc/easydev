import {  Title, Card, Badge, Text } from '@aspirity/easydev';
import styled from 'styled-components';

export const HPBadge = styled(Badge)`
  color: ${({ theme }) => (theme.type === 'light' ? '#178767' : '#10453B')};
  background-color: ${({ theme }) => (theme.type === 'light' ? '#D5F8EE' : '#DDF9F1')};
`;

export const FunBadge = styled(Badge)`
  color: ${({ theme }) => (theme.type === 'light' ? '#1A6BC7' : '#006770')};
  background-color: ${({ theme }) => (theme.type === 'light' ? '#D5E6FA' : '#E3FFFF')};
`;

export const HeroesBadge = styled(Badge)`
  color: ${({ theme }) => (theme.type === 'light' ? '#6923FF' : '#8B6CF1')};
  background-color: ${({ theme }) => (theme.type === 'light' ? '#EDE5FF' : '#ECE7FE')};
`;

export const StyledTitle = styled(Title)`
  color: ${({ theme }) => (theme.type === 'light' ? '#272729' : '#E6E6E6')};
`;

export const StyledMainText = styled(Text)`
  color: ${({ theme }) => (theme.type === 'light' ? '#272729' : '#E6E6E6')};
  font-weight: 175;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyleCaptionText = styled(Text)`
  color: ${({ theme }) => (theme.type === 'light' ? '#7B7B7D' : '#9B95A0')};
`;

export const StyledCard = styled(Card)`
  margin-bottom: 52px;
  height: 347px;
  width: calc(1020px / 2 - 64px);
`;

export const StyledFooterCarouselTitle = styled(Title)`
  color: ${({ theme }) => (theme.type === 'light' ? '#272729' : '#E6E6E6')};
`;

export const StyledFooterCarouselText = styled(Text)`
  color: ${({ theme }) => (theme.type === 'light' ? '#272729' : '#E6E6E6')};
`;

export const StyledFooterCarouselCard = styled(Card)`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => (theme.type === 'light' ? '#fff' : 'none')};
  box-shadow: ${({ theme }) => theme.type === 'light' && '0px 2px 7px 0px rgba(0, 0, 0, 0.07);'};
`;
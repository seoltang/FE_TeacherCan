import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

type RandomResultLayoutProps = {
  backgroundImage: string;
};

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'center')}
  width: 100%;
  height: 100%;
`;

export const RandomResult = styled.div<RandomResultLayoutProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 96%;
  aspect-ratio: 5/3;
  margin: auto;
  border-radius: 10px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: burlywood;
`;

export const ChoosedComponentsContainer = styled.div`
  ${flexCustom('row', 'center', 'flex-start')}
  width: 100%;
  max-width: 720px;
  border: 3px solid ${theme.color.primary[500]};
  border-radius: 3px;
  margin: 20px 0 20px 0;
  padding: 16px;
`;

type SelectBackgroundButtonWrapperProps = HTMLAttributes<HTMLDivElement> & {
  alignItems?: string;
  justifyContent?: string;
  children?: ReactNode;
};

type ResultWrapperProps = {
  color: string;
};

export const SelectBackgroundButtonWrapper = styled.div<SelectBackgroundButtonWrapperProps>`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
`;

export const ResultWrapper = styled.div<ResultWrapperProps>`
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 16px;
`;

export const BackgroundButtonContainer = styled.div`
  ${flexCustom('row', 'center', 'center')}
`;

interface backgroundButtonProps {
  backgroundColor: string;
  hoverBackground: string;
}

export const WoodBackgroundButton = styled(Button)<backgroundButtonProps>`
  ${flexCustom('row', 'center', 'center')}
  width: 24px;
  min-width: 24px;
  height: 24px;
  margin: 8px 4px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.hoverBackground};
  }

  &:active {
    background-color: ${(props) => props.hoverBackground};
  }
`;

export const ResultSpan = styled.span`
  font-size: 3.6rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, gold 50%);
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  display: flex;
  gap: 10px;

  margin: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

// import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  height: auto;
  display: flex;
  justify-content: space-around;
`;

export const IconWrapper = styled.div`
  margin-right: 1rem;
`;

interface SaveConditionButtonProps extends Button {
  marginRight?: string;
  marginLeft?: string;
}

export const SaveConditionButton = styled(Button)<SaveConditionButtonProps>`
  ${flexCustom('row', 'center', 'space-between')}

  min-width: 140px;
  min-height: 50px;
  box-shadow: 2px 2px ${(props) => props.theme.color.gray[400]};
  font-size: 1.8rem;
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  padding-bottom: 0;
`;

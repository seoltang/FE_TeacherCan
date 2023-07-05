import styled from 'styled-components';

import theme from '@Styles/theme';

import type { CheckboxLabel } from './type';

export const CheckBox = styled.input`
  height: 3rem;
  width: 3rem;
  padding: 10px;
  border: 3px solid ${theme.color.primary[500]};
  border-radius: 3px;
  vertical-align: middle;
`;

export const Label = styled.label<CheckboxLabel>`
  padding: 1px;
  margin-left: 10px;
  color: ${theme.color.primary[700]};
  font-size: 2rem;
  font-weight: bold;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
`;

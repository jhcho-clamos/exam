import styled from 'styled-components';

interface FontType {
  color?: string;
  size?: string;
  bold?: boolean;
  margin?: string;
}
const Text = styled.span<FontType>`
  color: ${(e) => e.color || 'white'};
  font-size: ${(e) => e.size || '1rem'};
  font-family: 'NotoSans';
  margin: ${(e) => e.margin || '0'};
  font-weight: ${(e) => (e.bold ? 'bold' : '400')};
`;

export { Text };

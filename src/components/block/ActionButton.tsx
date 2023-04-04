import React from 'react';
import styled from 'styled-components';
import { Text } from '../../styles/font';

interface buttonType {
  bgColor?: string;
  fontSize?: string;
  width?: string;
  padding?: string;
}

interface actionButtonType extends buttonType {
  textColor?: string;
  text?: string;
  action?: Function;
}

const Container = styled.div<buttonType>`
  width: ${(e) => e.width || '100%'};
  font-size: ${(e) => e.fontSize};
  background: ${(e) => e.bgColor || 'white'};
  padding: ${(e) => e.padding || '1rem 0'};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ActionButton = ({
  width,
  bgColor,
  fontSize,
  textColor,
  text,
  action,
  padding,
}: actionButtonType) => {
  return (
    <Container
      padding={padding}
      fontSize={fontSize}
      bgColor={bgColor}
      width={width}
      onClick={() => {
        if (action) {
          return action();
        } else {
          return null;
        }
      }}
    >
      <Text size={'1em'} color={textColor} bold={true}>
        {text || ''}
      </Text>
    </Container>
  );
};

export default ActionButton;

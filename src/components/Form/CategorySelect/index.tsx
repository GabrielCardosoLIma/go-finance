import React from 'react';
import { Container, Category, Icon } from './Styles';

interface Props{
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({title, onPress}: Props) {
    return (
      <Container>
        <Category>{title}</Category>
        <Icon name="chevron-down" />
      </Container>
    )
  }
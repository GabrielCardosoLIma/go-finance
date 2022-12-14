import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

interface ContainerProps{
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  border-left-color: ${({ color }) => color};
  padding: 13px 24px;
  border-radius: 5px;
  border-left-width: 4px;
  margin-bottom: 8px;
  /* margin-bottom: ${RFPercentage(2)}px; */
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

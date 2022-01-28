import { Container } from '@mui/material'
import styled from 'styled-components'

export const Div = styled.div`
  height: 100vh;
  width: 100%;
  background: #303c6c;
`

export const Div1 = styled(Container)`
  padding-top: 200px;
  text-align: center;
`
export const Title = styled.h1`
  text-align: center;
  color: #fff;
  @media screen and (max-width: 200px) {
    font-size: 10px;
  } ;
`

export const Text = styled.p`
  text-align: center;
  color: #fff;
  @media screen and (max-width: 200px) {
    font-size: 10px;
  } ;
`

export const Button = styled.button`
  border: none;
  height: 40px;
  border-radius: 5px;
  margin-top: 50px;
  padding: 10px;
  cursor: pointer;
`

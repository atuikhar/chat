import styled from 'styled-components'
import { Container } from '@mui/material'

export const Contact = styled.div`
100%;`
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
`
export const Div1 = styled(Container)``
export const Div2 = styled.div`
  padding: 10px;
`
export const Div3 = styled.div`
  display: flex;
  align-items: center;
`
export const Icon = styled.img`
  cursor: pointer;
  @media screen and (max-width: 250px) {
    width: 20px;
  }
`
export const Text = styled.h3`
  @media screen and (max-width: 250px) {
    display: none;
  }
`
export const Title = styled.h1`
  font-weight: 800;
  margin: 0;
  @media screen and (max-width: 250px) {
    display: none;
  }
`

export const SearchContainer = styled(Container)``

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border: 0.5px solid #d5d8de;
  border-radius: 10px;
  padding-left: 60px;
  @media screen and (max-width: 250px) {
    display: none;
  }
`

export const SearchIcon = styled.img`
  position: relative;
  top: 45px;
  left: 20px;
  cursor: pointer;
  @media screen and (max-width: 250px) {
    display: none;
  }
`

export const ContactList = styled(Container)`
  margin-top: 30px;
  overflow: auto;
  height: 600px;
  width: 100%;
`
export const List = styled.div`
  border: 0.5px solid #d5d8de;
  border-radius: 10px;
`

export const Username = styled.h3`
  padding: 5px;
  @media screen and (max-width: 250px) {
    display: none;
  }
`

export const ChatText = styled.p`
  color: #ababab;
  padding: 5px;
  @media screen and (max-width: 250px) {
    display: none;
  }
`

export const SmallText = styled.p`
  font-size: 10px;
  color: #ababab;
  @media screen and (max-width: 170px) {
    font-size: 5px;
  }
  @media screen and (max-width: 100px) {
    display: none;
  }
`
export const Button = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    border: 0.5px solid black;
    border-radius: 2px;
  }
`

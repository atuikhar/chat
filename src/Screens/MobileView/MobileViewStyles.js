import styled from 'styled-components'
import { Container } from '@mui/material'

export const Wrapper = styled.div``

export const Time = styled.img`
  padding: 10px;
`

export const Network = styled.img`
  padding: 5px;
`
export const Wifi = styled.img`
  padding: 5px;
`
export const Battery = styled.img`
  padding: 5px;
`

export const Back = styled.img`
  padding-left: 20px;
`
export const Online = styled.img`
  position: relative;
  left: -10px;
  top: 20px;
`

export const Menu = styled.img`
  padding-right: 20px;
`

export const Text = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.02em;
`

export const LiveChat = styled.div``

export const ChatBox = styled.div`
  border-radius: 20px 20px 20px 20px;
`

export const ChatNav = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.img`
  padding-left: 20px;
  cursor: pointer;
`

export const Name = styled.h3`
  padding-left: 20px;
`
export const Div = styled.div`
  display: flex;
  align-items: center;
`

export const LiveMessages = styled(Container)`
  display: flex;
  margin-top: 20px;
`
export const LiveMessagesReply = styled(Container)`
  display: flex;
  justify-content: end;
  margin-top: 10px;
`

export const LiveText = styled(Container)`
  background: #f4f4f4;
  width: 60%;
  margin-left: 10px;
  margin-right: 0px;
  overflow-wrap: break-word;
  padding: 25px;
  margin-bottom: 10px;
  border-radius: 0px 20px 20px 0px;
`

export const LiveTextReply = styled(Container)`
  background: rgba(180, 223, 229, 0.5);
  width: 60%;
  margin-left: 10px;
  margin-right: 0px;
  overflow-wrap: break-word;
  padding: 25px;
  margin-bottom: 30px;
  border-radius: 20px 0px 0px 20px;
`

export const InputContainer = styled(Container)`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  font-size: 10px;
`

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border: 0.5px solid #d5d8de;
  border-radius: 10px;
  padding-left: 10px;
  @media Screen and (max-width: 620px) {
    height: 40px;
    width: 80%;
  }
`
export const AttachmentIcon = styled.img`
  position: relative;
  left: 76%;
  cursor: pointer;

  @media Screen and (max-width: 620px) {
    height: 20px;
    width: 20px;
    left: 75%;
  }
  @media Screen and (max-width: 430px) {
    height: 20px;
    width: 20px;
    left: 70%;
  }
  @media Screen and (max-width: 370px) {
    height: 20px;
    width: 20px;
    left: 60%;
  }
  @media Screen and (max-width: 270px) {
    height: 20px;
    width: 20px;
    left: 55%;
  }
`
export const SendIcon = styled.img`
  cursor: pointer;
  position: relative;
  left: -45px;
  @media Screen and (max-width: 620px) {
    height: 25px;
    width: 25px;
    left: -33px;
  }
`
export const IconBg = styled.img`
  cursor: pointer;
  margin-left: 10px;
  @media Screen and (max-width: 620px) {
    height: 40px;
    width: 40px;
  }
`

import { Container } from '@mui/material'
import styled from 'styled-components'

export const ChatDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  align-items: center;
`

export const IconRight = styled.img`
  cursor: pointer;

  padding-right: 40px;
`

export const Text = styled.h3``

export const LiveChat = styled(Container)`
  margin-top: 50px;
`

export const ChatBox = styled.div`
  border-radius: 20px 20px 20px 20px;
  border: 1px solid #bbb;
`

export const ChatNav = styled.div`
  background: #303c6c;
  border-radius: 20px 20px 0px 0px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.img`
  padding-left: 20px;
  cursor: pointer;
`
export const RightChat = styled.img`
  padding-right: 50px;
  cursor: pointer;
`
export const Name = styled.h3`
  color: #ffffff;
  padding-left: 20px;
`
export const Div = styled.div`
  display: flex;
  align-items: center;
`
export const Div1 = styled.div``

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
`

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border: 0.5px solid #d5d8de;
  border-radius: 10px;
  padding-left: 60px;
`
export const AttachmentIcon = styled.img`
  position: relative;
  left: 76%;
  cursor: pointer;

  @media Screen and (max-width: 1120px) {
    left: 67%;
  }
`
export const SendIcon = styled.img`
  cursor: pointer;
  position: relative;
  left: -45px;
`
export const IconBg = styled.img`
  cursor: pointer;
  margin-left: 10px;
`

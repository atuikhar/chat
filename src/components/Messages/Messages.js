import React, { useRef } from 'react'

import {
  ChatDiv,
  ChatNav,
  IconRight,
  LiveChat,
  Text,
  ChatBox,
  LiveMessages,
  LiveMessagesReply,
  Icon,
  Name,
  Div,
  Div1,
  RightChat,
  LiveText,
  LiveTextReply,
  Input,
  InputContainer,
  AttachmentIcon,
  SendIcon,
  IconBg,
} from './MessagesStyles'
import { messages } from '../../data'

const Messages = () => {
  const inputFile = useRef(null)

  const onAttachment = () => {
    inputFile.current.click()
  }

  return (
    <>
      <ChatDiv>
        <IconRight src="/Notification.png" />
        <IconRight src="/Acc.png" />
        <Text style={{ paddingRight: '10px' }}>Prakash</Text>
        <IconRight src="/ArrowDown.png" />
      </ChatDiv>
      <LiveChat>
        <ChatBox>
          <ChatNav>
            <Div>
              <Icon src="/Pic.png" />
              <Name>Jenny</Name>
            </Div>
            <Div1>
              <RightChat src="/Group.png" />
              <RightChat src="/X.png" />
            </Div1>
          </ChatNav>
          <Text
            style={{ textAlign: 'center', marginTop: '20px', color: '#bbbb' }}
          >
            Today
          </Text>
          <div style={{ height: '400px', overflow: 'auto' }}>
            {messages.map((m, i) => {
              return (
                <>
                  <LiveMessages>
                    <div>
                      <Icon src="/Pic.png" />
                    </div>
                    <LiveText>
                      <Text>{m.text}</Text>
                    </LiveText>
                  </LiveMessages>
                  <LiveMessagesReply>
                    <LiveTextReply>
                      <Text>{m.text}</Text>
                    </LiveTextReply>
                    <div>
                      <Icon src="/Pic1.png" />
                    </div>
                  </LiveMessagesReply>
                </>
              )
            })}
          </div>
          <InputContainer>
            <input style={{ display: 'none' }} ref={inputFile} type="file" />
            <AttachmentIcon onClick={onAttachment} src="/Attachment.png" />
            <Input type="text" placeholder="Write a message..." />
            <IconBg src="/Circle.png" />
            <SendIcon src="/Send.png" />
          </InputContainer>
        </ChatBox>
      </LiveChat>
    </>
  )
}

export default Messages

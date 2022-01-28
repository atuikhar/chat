import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import {
  Wrapper,
  ChatNav,
  LiveChat,
  Text,
  ChatBox,
  LiveMessages,
  LiveMessagesReply,
  Icon,
  Name,
  Div,
  LiveText,
  LiveTextReply,
  Input,
  InputContainer,
  AttachmentIcon,
  SendIcon,
  IconBg,
  Time,
  Network,
  Wifi,
  Battery,
  Back,
  Menu,
  Online,
} from './MobileViewStyles'
import { messages } from '../../data'

export const MobileView = () => {
  const inputFile = useRef(null)

  const onAttachment = () => {
    inputFile.current.click()
  }

  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          background: ' #303C6C',
          height: '30px',
          alignItems: 'center',
        }}
      >
        <div>
          <Time src="/Time.png" />
        </div>
        <div>
          <Network src="/Network.png" />
          <Wifi src="/Wifi.png" />
          <Battery src="/Battery.png" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          background: ' #303C6C',
          height: '30px',
          alignItems: 'center',
        }}
      >
        <div>
          <Time src="/Ico.png" />
        </div>
        <h5 style={{ color: '#fff', paddingLeft: '33%' }}>Messages</h5>
      </div>

      <LiveChat>
        <ChatBox>
          <ChatNav>
            <Div>
              <Link to="/">
                <Back src="/Back.png" />
              </Link>
              <Icon src="/Pic.png" />
              <Online src="/online.png" />

              <div>
                <Name>Jenny</Name>
                <p
                  style={{
                    paddingLeft: '20px',
                    fontSize: '10px',
                    color: '#bbb',
                  }}
                >
                  Online
                </p>
              </div>
            </Div>
            <Menu src="/vertical.png" />
          </ChatNav>
          <Text
            style={{
              fontSize: '10px',
              textAlign: 'center',
              marginTop: '20px',
              color: '#bbbb',
            }}
          >
            Today
          </Text>
          <div style={{ height: '400px', overflow: 'auto' }}>
            {messages.map((m, i) => {
              return (
                <>
                  <LiveMessages>
                    <LiveText>
                      <Text>{m.text}</Text>
                      <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <p style={{ color: '#bbb', fontSize: '10px' }}>
                          {m.time}
                        </p>
                      </div>
                    </LiveText>
                  </LiveMessages>
                  <LiveMessagesReply>
                    <LiveTextReply>
                      <Text>{m.text}</Text>
                      <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <p style={{ color: '#bbb', fontSize: '10px' }}>
                          {m.time}
                        </p>
                      </div>
                    </LiveTextReply>
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
    </Wrapper>
  )
}

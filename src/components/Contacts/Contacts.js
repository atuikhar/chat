import {
  Contact,
  Div,
  Title,
  Div1,
  Div2,
  Div3,
  Icon,
  Text,
  SearchIcon,
  SearchContainer,
  Input,
  ContactList,
  List,
  ChatText,
  SmallText,
  Username,
  Button,
} from './ContactStyles'
import { users } from '../../data'
import { Grid } from '@mui/material'

const Contacts = () => {
  return (
    <>
      <Contact>
        <Div>
          <Div1>
            <Title>Chat</Title>
          </Div1>
          <Div3>
            <Div2>
              <Icon src="/Filter.png" />
            </Div2>
            <Div2>
              <Text>Sort</Text>
            </Div2>
          </Div3>
        </Div>
        <SearchContainer>
          <SearchIcon src="/Search.png" />
          <Input type="text" placeholder="Search..." />
        </SearchContainer>
        <ContactList>
          <List>
            {users.map((d, index) => {
              return (
                <>
                  <Button>
                    <Grid
                      container
                      sx={{
                        borderBottom: '0.5px solid #d5d8de',
                        cursor: 'pointer',
                      }}
                    >
                      <Grid item xs={3} sm={3} md={3} lg={3} sx={{ p: 2 }}>
                        <Icon src="/Pic.png" />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} sx={{ p: 2 }}>
                        <Username>{d.name}</Username>
                        <ChatText>{d.text}</ChatText>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3} sx={{ p: 2 }}>
                        <SmallText>{d.time}</SmallText>
                      </Grid>
                    </Grid>
                  </Button>
                </>
              )
            })}
          </List>
        </ContactList>
      </Contact>
    </>
  )
}

export default Contacts

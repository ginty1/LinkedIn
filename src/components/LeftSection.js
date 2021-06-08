import React from 'react';
import styled from 'styled-components';
function LeftSection(props) {
    return (
      <Container>
          <ArtCard>
              <UserInfo>
                  <CardBackground/>
                  <a>
                      <Photo/>
                      <Link>Welcome, there!</Link>
                  </a>
                  <a>
                   <AddPhotoText>Add a photo</AddPhotoText>   
                  </a>
              </UserInfo>
              <Widget>
                  <a>
                      <div>
                          <span>Connections</span>
                          <span>Grow your network</span>
                      </div>
                      <img src="/img/widget-icon.svg"/>
                  </a>
              </Widget>
              <Item>
                  <span>
                      <img src="/img/item-icon.svg"/>
                      My items
                  </span>
              </Item>
          </ArtCard>
          <CommunityCard>
              <a>
                  <span>Groups</span>
                  </a>
                  <a>
                      <span>
                          Events
                          <img src='/img/plus-icon.svg' alt=''/> 
                      </span>
                  </a>
                  <a>
                      <span>Follow Hastags</span>

                  </a>
                  <a>Discover more</a>
          </CommunityCard>
      </Container>
    )
}
const Container=styled.div`
grid-area: leftSection;
`;

const ArtCard=styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
position: relative;
border: none;
`;
const UserInfo=styled.div`
border-bottom: 1px solid rgba(0 0 0/ 0.15);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
`;
const CardBackground=styled.div`
background: url("/img/card-bg.svg");
height: 54px;
background-size: 462px;
margin: -12px -12px 0;
`;
const Photo=styled.div`
box-shadow: none;
background-image: url('/img/photo.svg');
width: 72px;
height: 72px;
box-sizing: border-box;
background-clip: content-box;
background-color: white;
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
border: 20px solid white;
margin: -38px auto 12px;
border-radius: 50%;
`;
const Link=styled.div`
font-size: 16px;
line-height: 1.5;
color: rgba(0,0,0, 0.9);
font-weight: 600;
`;
const AddPhotoText=styled.div`
color: #0a66c2;
margin-top: 4px;
font-size: 12px;
line-height: 1.33;
font-weight: 400;
`;
const Widget=styled.div`
border-bottom: 1px solid rgba(0,0,0, 0.15);
padding-top: 12px;
padding-bottom: 12px;

&> a{
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover{
        background-color: rgba(0,0,0, 0.08);}
     div{
         display: flex;
         flex-direction: column;
         text-align: left;
         span{
             font-size: 12px;
             line-height: 1.33;
             &:first-child{
              color: rgba(0,0,0, 0.6);
             }
             &:nth-child(){
                 color: rgba(0,0,0, 1);
             }
         }
     }
}
svg{
    color: rgba(0,0,0,1);
}
`;
const Item=styled.a`
border-color: rgba(0,0,0,0.8);
font-size: 12px;
padding: 12px;
display: block;
text-align:left;
span{
    display: flex;
    align-items: center;
    color: rgba(0,0,0 0.6);
    svg{
        color: rgba(0,0,0 0.6);
    }
}
:hover{
    background-color: rgba(0,0,0,0.08);
}
`;
const CommunityCard=styled(ArtCard)`
padding: 8px 0 0;
display: flex;
flex-direction: column;
text-align: left;
a{
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    :hover{
        color: #0a66c2;
    }
    span{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    :last-child{
        color: rgba(0,0,0,0.6);
        border-top: 1px solid #d6cec2;
        padding: 12px;
        :hover{
            background-color: rgba(0,0,0,0.08);
        }
    }
}
`;
export default LeftSection;

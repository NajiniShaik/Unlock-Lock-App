import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DetailedContainer = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Card = styled.div`
  text-align: center;
`

export const ImgElement = styled.img`
  height: 80px;
  width: 90px;
`

export const MsgElement = styled.p`
  color: #e2e8f0;
  font-size: 22px;
  font-family: 'Roboto';
`

export const ButtonElement = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  width: 120px;
  padding: 10px 0px;
  border-radius: 7px;
  border-width: 0px;
  font-size: 16px;
  font-family: 'Roboto';
`

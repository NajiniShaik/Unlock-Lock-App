import {useState} from 'react'

import {
  BgContainer,
  DetailedContainer,
  Card,
  ImgElement,
  MsgElement,
  ButtonElement,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, changeLock] = useState(true)

  const onChangeLock = () => {
    changeLock(prevLock => !prevLock)
  }

  const imgUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '

  const altValue = isLocked ? 'lock' : 'unlock'

  const msg = isLocked ? 'Locked' : 'Unlocked'

  const btnText = isLocked ? 'Unlock' : 'Lock'

  return (
    <BgContainer>
      <DetailedContainer>
        <Card>
          <ImgElement src={imgUrl} alt={altValue} />
          <MsgElement>{`Your Device is ${msg}`}</MsgElement>
        </Card>
        <ButtonElement onClick={onChangeLock} type="button">
          {btnText}
        </ButtonElement>
      </DetailedContainer>
    </BgContainer>
  )
}

export default Unlock

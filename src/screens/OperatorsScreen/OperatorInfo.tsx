import { useState } from 'react'
import {
  Avatar,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'

import { type SRMOperatorInfo } from '../../types'
import { AvatarContainer } from '../../components'
import useMobileLayout from '../../hooks/useMobileLayout'

export default function OperatorInfo(props: SRMOperatorInfo) {
  const { id, avatar, createdAt, isWorking, name, text } = props
  const [toggle, setToggle] = useState(isWorking)
  const isMobile = useMobileLayout()

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <TableRow>
      <TableCell
        sx={{
          fontWeight: 500,
          lineHeight: '24px',
        }}
      >
        {id}
      </TableCell>
      <TableCell>
        <AvatarContainer>
          {isMobile || <Avatar src={avatar} />}
          <Typography component="span">{name}</Typography>
        </AvatarContainer>
      </TableCell>
      <TableCell>
        <Checkbox checked={toggle} onChange={handleToggle} />
      </TableCell>
      <TableCell>
        <Typography component="div">{createdAt}</Typography>
      </TableCell>
      <TableCell>
        <Typography
          component="div"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '378px',
          }}
        >
          {text}
        </Typography>
      </TableCell>
    </TableRow>
  )
}

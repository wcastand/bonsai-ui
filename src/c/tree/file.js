import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'react-emotion'
import { FiFile } from 'react-icons/fi'

const Container = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Item = styled('a')`
  display: flex;
  text-decoration: none;
  padding: 4px;
  margin: 0;
  cursor: pointer;
  font-size: 14px;
  color: ${({ active }) => (active ? '#028F76' : '#282a36')};
  user-select: none;
`

const Icon = styled(FiFile)`
  transform: scaleY(1.1);
  color: ${({ active }) => (active ? '#028F76' : '#282a36')};
`

export default ({ id, file, active }) => {
  return (
    <Link href={file.path}>
      <Container>
        <Icon active={active} size={13} />
        <Item active={active}>{file.name}</Item>
      </Container>
    </Link>
  )
}

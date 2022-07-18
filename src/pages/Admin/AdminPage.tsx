import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';

import React from 'react'

type Props = {}

export default function AdminPage({ }: Props) {
  return (
    <>
      <div>Admin</div>
      <div>Admin</div>
      <div>Admin</div>
      <div>Admin</div>
      <div>Admin</div>
      <div>Admin</div>
      <Button variant='contained'>Admin</Button>
      <DataGrid columns={[{ field: 'name', editable: true }]} rows={[{ id: 1, name: 'React' },
      { id: 2, name: 'MUI' },]} />
    </>

  )
}
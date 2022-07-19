import { Button, Input } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import type { } from '@mui/x-data-grid/themeAugmentation';

import { getUsdaData } from '../../service/food/food';
import React, { useState } from 'react'

type Props = {}

export default function AdminPage({ }: Props) {
  const [foodSearch, setfoodSearch] = useState('');
  const [rows, setRows] = useState([
    { id: 1, foodName: '', foodNameTurkish: '', nutrients: '', },
  ]);

  const columns: GridColDef[] = [
    { field: 'foodName', headerName: 'Name', width: 150 },
    { field: 'foodNameTurkish', headerName: 'Name Turkish', width: 150 },
    { field: 'nutrients', headerName: 'P / F / C / E', width: 300 },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getUsdaData(foodSearch).then(data => {
      let dataRows = data.map((item: any, index: any) => {
        return {
          id: index,
          foodName: item.foodName,
          foodNameTurkish: item.foodNameTurkish,
          nutrients: item.nutrients.protein.value + ' / ' + item.nutrients.fat.value + ' / ' + item.nutrients.carbohydrates.value + ' / ' + item.nutrients.energy.value,
        }
      })
      setRows(dataRows);
    });
  }

  return (
    <div className='pt-16 lg:pt-24'>
      <form onSubmit={handleSubmit} >
        <Input onChange={(e) => setfoodSearch(e.target.value)} />
        <Button type="submit">Search</Button>
      </form>
      <div className='h-96'>
        <DataGrid columns={columns} rows={rows} />
      </div>
    </div>

  )
}
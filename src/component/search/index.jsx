import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCitites } from '../../api/api';



export default function Search({onSearchChange}) {
    const [searchValue , setSearchValue]=useState(null)

    const loadoptions=async(inputValue)=>{
        const citylist=await fetchCitites(inputValue)
        return citylist
    }

    const handleOnchange=(enterData)=>{
        setSearchValue(enterData)
        onSearchChange(enterData)
    }

  return (
    <AsyncPaginate 
    placeholder='Search for Cities'
    debounceTimeout={600}
    value={searchValue}
    onChange={(e)=>handleOnchange(e)}
    loadOptions={loadoptions}
    
    />
    
  )
}

import React from 'react';
// component Material UI
import Box from '@mui/joy/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/joy/Divider';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SwapVertIcon from '@mui/icons-material/SwapVert';
// component jsx
import MenuFilter from '@molecules/drawers/menuFilter/MenuFilter';
import MenuSortBy from '@molecules/drawers/menuSortBy/MenuSortBy';

const MiniHeader = (prop) => {
  const {
    titleSection,
    amountResults,
    openDrawerFilter,
    setOpenDrawerFilter,
    filterSelected,
    setFilterSelected,
    openDrawerSortBy,
    setOpenDrawerSortBy,
    checked,
    setChecked
  } = prop;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 1
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ justifyContent: 'start', alignItems: 'center', mb: 1 }}>
            Titulo {titleSection}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 400, color: 'grey', marginRight: 1 }}>
              ({amountResults}){' '}
            </Typography>

            <Typography variant="p" sx={{ fontSize: '14px', fontWeight: 400 }}>
              {' '}
              Resultados
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            height: '45px',
            backgroundColor: '#fff'
          }}
        >
          <Button
            variant="text"
            sx={{ width: '100%' }}
            startIcon={<FilterAltIcon />}
            onClick={() => setOpenDrawerFilter(true)}
          >
            Filtrar
          </Button>
          <Divider orientation="vertical" />
          <Button
            variant="text"
            sx={{ width: '100%' }}
            startIcon={<SwapVertIcon />}
            onClick={() => setOpenDrawerSortBy(true)}
          >
            Ordenar
          </Button>
        </Box>
      </Box>

      <MenuFilter
        openDrawer={openDrawerFilter}
        closeDrawer={setOpenDrawerFilter}
        filterSelected={filterSelected}
        setFilterSelected={setFilterSelected}
      />

      <MenuSortBy
        openDrawer={openDrawerSortBy}
        closeDrawer={setOpenDrawerSortBy}
        checked={checked}
        setChecked={setChecked}
      />
    </>
  );
};

export default MiniHeader;

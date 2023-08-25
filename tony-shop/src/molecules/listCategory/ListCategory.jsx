import React from 'react';

import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/material/Stack';

import toolLogo from '@assets/img/tool.icon.png';

function ListCategory() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Box component="ul" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}>
          <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/646/759/original/vector-tools-icon-symbol-sign.jpg"
                alt=""
              />
            </CardCover>
            <CardContent>
              <Typography level="body-lg" fontWeight="lg" textColor="#000" mt={{ xs: 12, sm: 18 }}>
                Herramienta
              </Typography>
            </CardContent>
          </Card>

          <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/646/759/original/vector-tools-icon-symbol-sign.jpg"
                alt=""
              />
            </CardCover>
            <CardContent>
              <Typography level="body-lg" fontWeight="lg" textColor="#000" mt={{ xs: 12, sm: 18 }}>
                Herramienta
              </Typography>
            </CardContent>
          </Card>

          <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/646/759/original/vector-tools-icon-symbol-sign.jpg"
                alt=""
              />
            </CardCover>
            <CardContent>
              <Typography level="body-lg" fontWeight="lg" textColor="#000" mt={{ xs: 12, sm: 18 }}>
                Herramienta
              </Typography>
            </CardContent>
          </Card>

          <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/646/759/original/vector-tools-icon-symbol-sign.jpg"
                alt=""
              />
            </CardCover>
            <CardContent>
              <Typography level="body-lg" fontWeight="lg" textColor="#000" mt={{ xs: 12, sm: 18 }}>
                Herramienta
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </>
  );
}

export default ListCategory;

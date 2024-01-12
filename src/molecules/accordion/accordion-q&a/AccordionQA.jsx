import React from 'react';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/joy/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

const AccordionQA = () => {
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '20px' }}>
        Preguntas y respuestas
      </AccordionSummary>
      <AccordionDetails sx={{ width: '100%', margin: 'auto' }}>
        <Box
          component="form"
          direction={'row'}
          sx={{ marginY: 2, width: '100%', display: 'flex', justifyContent: 'space-evenly' }}
        >
          <TextField
            id="input-question"
            value=""
            variant="outlined"
            type="text"
            placeholder="Haz una pregunta"
            sx={{ width: '70%' }}
          />

          <Button type="submit" variant="outlined" size="md" width={'30%'}>
            Preguntar
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            height: 'auto',
            margin: 'auto'
          }}
        >
          {/* OJO ESTO DEBE CAMBIAR PARA HACERLO DINAMICO */}
          <List>
            {/* pregunta */}
            <ListItem>
              <ListItemText>
                <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit?</Typography>
              </ListItemText>
            </ListItem>
            {/* respuesta */}
            <ListItem>
              <ListItemIcon>
                <SubdirectoryArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body2" sx={{ fontWeight: 'lighter' }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quaerat laboriosam similique modi
                  voluptates voluptate ut aperiam provident
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionQA;

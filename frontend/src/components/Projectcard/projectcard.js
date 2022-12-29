import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Avatar } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {CardHeader} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './projectcard.css';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card className='projectcardbox' sx={{ minWidth: 200, width: 350, maxWidth: 500, margin: 2, borderRadius: 5, padding: 1 }}>
    <CardHeader
      avatar={
        <Avatar sx={{width: 70, height: 70 }} aria-label="recepie">
        R
        </Avatar>
        }
        title=" Project Name"
        subheader="Author"
        titleTypographyProps={{variant: "h5", fontWeight: 600 }}
        />
      
    <CardContent>
      <Typography variant="body2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" sx={{borderRadius: 5}}>Connect</Button>
    </CardActions>
  </Card>
  );
}

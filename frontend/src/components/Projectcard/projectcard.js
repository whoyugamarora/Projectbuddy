import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './projectcard.css';

export default function BasicCard(props) {
  // Generate avatar URL based on the uploader’s email
  const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(props.email || 'User')}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

  return (
    <Card className='projectcardbox' sx={{ minWidth: 200, width: 350, maxWidth: 500, margin: 2, borderRadius: 5, padding: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ width: 100, height: 100 }}>
            <img
              className='userpic'
              src={avatarUrl}
              alt='User Avatar'
            />
          </Avatar> 
        }
        title={props.title}
        subheader={props.subheader}
        titleTypographyProps={{ variant: "h5", fontWeight: 600 }}
      />
      <CardContent>
        <Typography variant="body2">
          {props.description}
        </Typography>
        <br />
        <Typography variant="body3">
          <strong>Required Stack: </strong>{props.stack}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ borderRadius: 5 }}>Connect</Button>
      </CardActions>
    </Card>
  );
}

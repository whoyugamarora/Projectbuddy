import React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export default function BasicCard(props) {
  const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${encodeURIComponent(
    props.email || 'User'
  )}&backgroundColor=b6e3f4,c0aede,ffe4b3`;

  return (
    <Card
      sx={{
        width: 360,
        margin: '20px auto',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #ffffff, #f9fafb)',
        position: 'relative',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      {/* Gradient Accent Layer */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.4), transparent)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />

      {/* Header Section */}
      <CardHeader
        avatar={
          <Avatar
            src={avatarUrl}
            alt="User Avatar"
            sx={{
              width: 70,
              height: 70,
              border: '3px solid #ffffff',
              boxShadow: '0 5px 15px rgba(79, 70, 229, 0.3)',
              zIndex: 2,
            }}
          />
        }
        title={
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#1f2937',
              zIndex: 2,
            }}
          >
            {props.title}
          </Typography>
        }
        subheader={
          <Typography
            variant="body2"
            sx={{
              color: '#6b7280',
              zIndex: 2,
            }}
          >
            {props.subheader}
          </Typography>
        }
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      />

      {/* Content Section */}
      <CardContent sx={{ zIndex: 2 }}>
        <Typography
          variant="body2"
          sx={{
            color: '#4b5563',
            fontSize: '0.95rem',
            lineHeight: 1.6,
          }}
        >
          {props.description}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: 2,
            fontWeight: 600,
            color: '#4f46e5',
          }}
        >
          <strong>Tech Stack:</strong>{' '}
          {Array.isArray(props.stack)
            ? props.stack.join(', ')
            : props.stack}
        </Typography>
      </CardContent>

      {/* Actions Section */}
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingX: 2,
          paddingBottom: 2,
          zIndex: 2,
        }}
      >
        <Link to={`/profile/${props.userId}`} style={{ textDecoration: 'none' }}>
          <Button
            size="medium"
            sx={{
              textTransform: 'capitalize',
              color: '#ffffff',
              backgroundColor: '#4f46e5',
              fontWeight: 600,
              borderRadius: '8px',
              paddingX: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#4338ca',
              },
            }}
          >
            Connect
          </Button>
        </Link>

        {props.currentUserEmail === props.email && (
          <IconButton
            aria-label="delete"
            onClick={() => props.onDelete(props.project?.id || props.project?._id)}
            sx={{
              color: '#ef4444',
              '&:hover': {
                backgroundColor: '#fee2e2',
                borderRadius: '50%',
              },
            }}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

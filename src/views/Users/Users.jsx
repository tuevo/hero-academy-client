import { AppBar, Box, Tab, Tabs, GridList, GridListTile, Tooltip, Fab, Button } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import Student from 'components/Student/Student';
import Lecturer from 'components/Lecturer/Lecturer';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '35rem',
    width: '100%',
    overflow: 'hidden',
    borderRadius: theme.palette.card.borderRadius
  },
  tabs: {
    boxShadow: 'none',
    "backgroundColor": "#a4508b",
    "backgroundImage": "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)"
  },
  btnAddLecturerContainer: {
    position: 'absolute',
    zIndex: 10,
    right: '5%',
    top: '-5%'
  },
  btnAddLecturer: {
    "backgroundColor": "#a4508b",
    "backgroundImage": "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)"
  },
  btnLoadMore: {
    "backgroundColor": "#a4508b",
    "backgroundImage": "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)"
  }
}));

const Users = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const students = [
    {
      _id: 1,
      fullName: 'Lana',
      avatarUrl: 'images/avatars/avatar_6.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 2,
      fullName: 'Lee Wei Shuan',
      avatarUrl: 'images/avatars/avatar_5.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 3,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 4,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 5,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 6,
      fullName: 'Lana',
      avatarUrl: 'images/avatars/avatar_6.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 7,
      fullName: 'Lee Wei Shuan',
      avatarUrl: 'images/avatars/avatar_5.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 8,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 9,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 10,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 11,
      fullName: 'Lana',
      avatarUrl: 'images/avatars/avatar_6.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
    {
      _id: 12,
      fullName: 'Lee Wei Shuan',
      avatarUrl: 'images/avatars/avatar_5.png',
      email: 'abc@gmail.com',
      createdAt: new Date()
    },
  ]

  const lecturers = [
    {
      _id: 1,
      fullName: 'Lana',
      avatarUrl: 'images/avatars/avatar_6.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 2,
      fullName: 'Lee Wei Shuan',
      avatarUrl: 'images/avatars/avatar_5.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 3,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 4,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 5,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 6,
      fullName: 'Lana',
      avatarUrl: 'images/avatars/avatar_6.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 7,
      fullName: 'Lee Wei Shuan',
      avatarUrl: 'images/avatars/avatar_5.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 8,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 9,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 10,
      fullName: 'Steve Jonathan',
      avatarUrl: 'images/avatars/avatar_4.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 11,
      fullName: 'Lana',
      avatarUrl: 'images/avatars/avatar_6.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
    {
      _id: 12,
      fullName: 'Lee Wei Shuan',
      avatarUrl: 'images/avatars/avatar_5.png',
      email: 'abc@gmail.com',
      createdAt: new Date(),
      averageRating: 4.5,
      numberOfCourses: 10,
      numberOfStudents: 2500,
      numberOfRatings: 2500
    },
  ]

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabs} color="primary">
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="simple tabs example">
          <Tab icon={<PersonIcon />} label="Học viên (550)" {...a11yProps(0)} />
          <Tab icon={<FaceIcon />} label="Giảng viên (10)" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      {tabValue === 0 && (
        <Box p={4}>
          <GridList cellHeight="auto" cols={3}>
            {students.map((s, i) => (
              <GridListTile key={s._id}>
                <Box m={1} className="animate__animated animate__fadeIn" style={{ animationDelay: `${0.1 * i}s` }}>
                  <Student data={s} />
                </Box>
              </GridListTile>
            ))}
          </GridList>
          <Box px={1} pt={3}>
            <Button fullWidth className={classes.btnLoadMore} variant="contained" color="primary" size="large">Xem thêm học viên</Button>
          </Box>
        </Box>
      )}

      {tabValue === 1 && (
        <Box p={4} position="relative">
          <Box className={`${classes.btnAddLecturerContainer} animate__animated animate__bounceIn`}>
            <Tooltip title="Thêm giảng viên mới">
              <Fab size="large" color="primary" aria-label="add" className={classes.btnAddLecturer}>
                <PersonAddIcon fontSize="large" />
              </Fab>
            </Tooltip>
          </Box>
          <GridList cellHeight="auto" cols={3}>
            {lecturers.map((s, i) => (
              <GridListTile key={s._id}>
                <Box m={1} className="animate__animated animate__fadeIn" style={{ animationDelay: `${0.1 * i}s` }}>
                  <Lecturer data={s} />
                </Box>
              </GridListTile>
            ))}
          </GridList>
          <Box px={1} pt={3}>
            <Button fullWidth className={classes.btnLoadMore} variant="contained" color="primary" size="large">Xem thêm giảng viên</Button>
          </Box>
        </Box>
      )}

    </div>
  );
};

export default Users;
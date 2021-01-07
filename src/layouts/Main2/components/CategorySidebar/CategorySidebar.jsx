import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import CategorySidebarNav from './CategorySidebarNav/CategorySidebarNav';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 255,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
    paddingRight: 0,
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const CategorySidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const categoryClusters = [
    {
      _id: 1,
      name: 'Công nghệ thông tin',
      categories: [
        {
          _id: 1,
          name: 'Lập trình web',
          href: '/dashboard'
        },
        {
          _id: 2,
          name: 'Lập trình di động',
          href: '/dashboard'
        },
        {
          _id: 3,
          name: 'Lập trình game',
          href: '/dashboard'
        }
      ]
    },
    {
      _id: 2,
      name: 'Thiết kế',
      categories: [
        {
          _id: 1,
          name: 'Đồ họa',
          href: '/dashboard'
        },
        {
          _id: 2,
          name: 'Nội thất',
          href: '/dashboard'
        },
        {
          _id: 3,
          name: 'Thời trang',
          href: '/dashboard'
        }
      ]
    },
    {
      _id: 4,
      name: 'Quản trị kinh doanh',
      categories: [
        {
          _id: 1,
          name: 'Lập trình web',
          href: '/dashboard'
        },
        {
          _id: 2,
          name: 'Lập trình di động',
          href: '/dashboard'
        },
        {
          _id: 3,
          name: 'Lập trình game',
          href: '/dashboard'
        }
      ]
    },
    {
      _id: 5,
      name: 'Digital Marketing',
      categories: [
        {
          _id: 1,
          name: 'Lập trình web',
          href: '/dashboard'
        },
        {
          _id: 2,
          name: 'Lập trình di động',
          href: '/dashboard'
        },
        {
          _id: 3,
          name: 'Lập trình game',
          href: '/dashboard'
        }
      ]
    },
    {
      _id: 3,
      name: 'Ngoại ngữ',
      categories: [
        {
          _id: 1,
          name: 'Tiếng Anh',
          href: '/dashboard'
        },
        {
          _id: 2,
          name: 'Tiếng Trung',
          href: '/dashboard'
        },
        {
          _id: 3,
          name: 'Tiếng Nhật',
          href: '/dashboard'
        },
        {
          _id: 3,
          name: 'Tiếng Pháp',
          href: '/dashboard'
        }
      ]
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CategorySidebarNav
          className={classes.nav}
          categoryClusters={categoryClusters}
        />
      </div>
    </Drawer>
  );
};

CategorySidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default CategorySidebar;
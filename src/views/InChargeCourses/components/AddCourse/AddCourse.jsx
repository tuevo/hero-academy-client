import { Box, Button, Drawer, Fab, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Input, InputAdornment, InputLabel, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ImageUploading from 'components/ImageUploading/ImageUploading';
import TextEditor from 'components/TextEditor/TextEditor';
import React, { useEffect, useState } from 'react';
import validate from 'validate.js';

const schema = {
  thumbnail: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  title: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  description: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  content: {
    presence: { allowEmpty: false, message: 'is required' }
  },
  tuition: {
    presence: { allowEmpty: false, message: 'is required' },
    numericality: {
      greaterThanOrEqualTo: 0,
      lessThanOrEqualTo: 999999999
    }
  },
  discountPercent: {
    presence: { allowEmpty: false, message: 'is required' },
    numericality: {
      greaterThanOrEqualTo: 0,
      lessThanOrEqualTo: 100
    }
  },
}

const useStyles = makeStyles((theme) => ({
  content: {
    width: '37.5rem',
    padding: theme.spacing(4),
    paddingTop: theme.spacing(0)
  },
  formControl: {
    marginBottom: theme.spacing(2)
  }
}));

export default function AddCourse({ open, onClose }) {
  const classes = useStyles();
  const anchor = 'right';

  const categoryClusters = [
    {
      _id: '1',
      name: 'Công nghệ thông tin',
      categories: [
        {
          _id: '1.1',
          name: 'Lập trình web',
          href: '/category-courses'
        },
        {
          _id: '1.2',
          name: 'Lập trình di động',
          href: '/category-courses'
        },
        {
          _id: '1.3',
          name: 'Lập trình game',
          href: '/category-courses'
        }
      ]
    },
    {
      _id: '2',
      name: 'Thiết kế',
      categories: [
        {
          _id: '2.1',
          name: 'Đồ họa',
          href: '/category-courses'
        },
        {
          _id: '2.2',
          name: 'Nội thất',
          href: '/category-courses'
        },
        {
          _id: '2.3',
          name: 'Thời trang',
          href: '/category-courses'
        }
      ]
    },
    {
      _id: '3',
      name: 'Quản trị kinh doanh',
      categories: [
        {
          _id: '3.1',
          name: 'Lập trình web',
          href: '/category-courses'
        },
        {
          _id: '3.2',
          name: 'Lập trình di động',
          href: '/category-courses'
        },
        {
          _id: '3.3',
          name: 'Lập trình game',
          href: '/category-courses'
        }
      ]
    },
    {
      _id: '4',
      name: 'Digital Marketing',
      categories: [
        {
          _id: '4.1',
          name: 'Lập trình web',
          href: '/category-courses'
        },
        {
          _id: '4.2',
          name: 'Lập trình di động',
          href: '/category-courses'
        },
        {
          _id: '4.3',
          name: 'Lập trình game',
          href: '/category-courses'
        }
      ]
    },
    {
      _id: '5',
      name: 'Ngoại ngữ',
      categories: [
        {
          _id: '5.1',
          name: 'Tiếng Anh',
          href: '/category-courses'
        },
        {
          _id: '5.2',
          name: 'Tiếng Trung',
          href: '/category-courses'
        },
        {
          _id: '5.3',
          name: 'Tiếng Nhật',
          href: '/category-courses'
        },
        {
          _id: '5.4',
          name: 'Tiếng Pháp',
          href: '/category-courses'
        }
      ]
    },
  ];

  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      thumbnail: null,
      title: '',
      categoryId: categoryClusters[0].categories[0]._id,
      tuition: 0,
      discountPercent: 0,
      isFinished: false,
      description: '',
      content: '',
    },
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    const { name } = event.target;
    let { value } = event.target;

    if (value === 'true')
      value = true;
    if (value === 'false')
      value = false;

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [name]: value
      },
      touched: {
        ...formState.touched,
        [name]: true
      }
    }));
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const handleImageChange = (image) => {
    const name = 'thumbnail', value = image;
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [name]: value
      },
      touched: {
        ...formState.touched,
        [name]: true
      }
    }));
  }

  const handleTextEditorChange = (text) => {
    const name = 'content', value = text;
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [name]: value
      },
      touched: {
        ...formState.touched,
        [name]: true
      }
    }));
  }

  const hanldeBtnAddClick = (e) => {
    const data = { ...formState.values };
    console.log(data);
  }

  const content = (anchor) => (
    <div
      className={classes.content}
      role="presentation"
    >
      <Box my={2}>
        <Fab size="small" style={{ boxShadow: 'none' }} onClick={e => onClose(e)} >
          <CloseIcon />
        </Fab>
      </Box>

      <div className={classes.formControl}>
        <ImageUploading initImageUrl={null} onImageChange={handleImageChange} />
      </div>

      <form>
        <FormControl className={classes.formControl} fullWidth>
          <TextField
            error={hasError('title')}
            helperText={
              hasError('title') ? formState.errors.title[0] : null
            }
            label="Tên khóa học"
            name="title"
            onChange={handleChange}
            type="text"
            value={formState.values.title || ''}
            variant="standard"
          />
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="grouped-native-select">Lĩnh vực</InputLabel>
          <Select name="categoryId" native value={formState.values.categoryId} onChange={handleChange}>
            {categoryClusters.map(cc => (
              <optgroup key={cc._id} label={cc.name}>
                {cc.categories.map(c => (
                  <option key={c._id} value={c._id}>{c.name}</option>
                ))}
              </optgroup>
            ))}
          </Select>
        </FormControl>

        <Grid container spacing={2}>
          <Grid item xs={9}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">Học phí</InputLabel>
              <Input
                error={hasError('tuition')}
                name="tuition"
                onChange={handleChange}
                type="number"
                value={formState.values.tuition || ''}
                variant="standard"
                endAdornment={<InputAdornment position="end">đ</InputAdornment>}
                inputProps={{ min: 0, max: 99999999 }}
              />
              <FormHelperText>{hasError('tuition') ? formState.errors.tuition[0] : null}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">Khuyễn mãi</InputLabel>
              <Input
                error={hasError('discountPercent')}
                name="discountPercent"
                onChange={handleChange}
                type="number"
                value={formState.values.discountPercent || ''}
                variant="standard"
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                inputProps={{ min: 0, max: 100 }}
              />
              <FormHelperText>{hasError('discountPercent') ? formState.errors.discountPercent[0] : null}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <FormControl className={classes.formControl} component="fieldset" fullWidth>
          <Box display="flex" alignItems="center">
            <Box mr={4}>
              <FormLabel component="legend">Trạng thái khóa học</FormLabel>
            </Box>
            <RadioGroup row name="isFinished" value={formState.values.isFinished} onChange={handleChange}>
              <FormControlLabel value={true} control={<Radio color="primary" />} label="Đã hoàn thành" />
              <FormControlLabel value={false} control={<Radio color="primary" />} label="Chưa hoàn thành" />
            </RadioGroup>
          </Box>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <TextField
            className={classes.formControl}
            error={hasError('description')}
            fullWidth
            helperText={
              hasError('description') ? formState.errors.description[0] : null
            }
            label="Mô tả khóa học"
            name="description"
            onChange={handleChange}
            type="text"
            value={formState.values.description || ''}
            variant="standard"
            multiline
          />
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <FormLabel component="legend">Nội dung khóa học</FormLabel>
          <Box mt={2} style={{ height: '25rem' }}>
            <TextEditor height={'89.5%'} defaultValue={formState.values.content} onChange={handleTextEditorChange} />
          </Box>
        </FormControl>

        <Box mt={2}>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            onClick={hanldeBtnAddClick}
            disabled={!formState.isValid}
          >
            Đăng khóa học
          </Button>
        </Box>
      </form>
    </div >
  );

  return (
    <Drawer anchor={anchor} open={open} onClose={e => onClose(e)}>
      {content(anchor)}
    </Drawer>
  );
}
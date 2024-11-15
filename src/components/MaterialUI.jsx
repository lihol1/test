// import styles from '../app/material-ui.module.scss'
import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import InputBase from '@mui/material/InputBase';
// import { makeStyles } from '@mui/styles';

//Для множественного выбора
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';


// import { Option as BaseOption, optionClasses } from '@mui/base/Option';

import {createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { colors } from "@mui/material";
 




export default function MaterialUI () {    
    const [age, setAge] = useState('');
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    //Множественный выбор
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];

    const theme2 = useTheme();
    const [personName, setPersonName] = useState([]);
    
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

    function getStyles(name, personName, theme2) {
        return {
          fontWeight: personName.includes(name)
            ? theme2.typography.fontWeightMedium
            : theme2.typography.fontWeightRegular,
        };
      }             

    const handleMultiChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };


    const handleDelete = ()=>{
        console.log('delete')
    }

    

    const theme = createTheme({
        palette: {
            primary: {
                // main:'#11be75',       //зеленый
                //   main: '#3f50b5',
                main: '#f50057',       
                // light: '#757ce8',    // необязательны
                // dark: '#40cb90',
                // contrastText: '#fff',                
            },
            secondary:{
                main: '#ffcf26',   //желтый
                //   main: '#f44336',
                // light: '#ff7961',     // необязательны
                // dark: '#ba000d',
                // contrastText: '#000',
            },
            // mode: 'dark',   // темный режим
        },
        // typography:{},
        // spacing:{},
        // breakpoints:{},
        // zIndex:{},
        // transitions:{},

        components: {        
              
            MuiSelect: {
                styleOverrides: {
                // Name of the slot                
                root: { 
                    // backgroundColor: '#f50057',
                    // variants: [
                    //     {
                    //       props: { variant: 'outlined' },
                    //       style: {
                    //         borderWidth: '3px',
                    //       },
                    //     },
                    //   ],                       
                    fontSize: '1rem', 
                    '&:hover': {
                        // borderColor: '#fff',
                        // outline: 'none',
                        // border: 'none',
                        // outlineOffset:'0', 
                        // boxShadow: '0 0 0 rgb(255, 255, 255) !important',
                        // "&:hover fieldset": {
                        //     borderColor: "#E0E3E7" // use the original border color on hover
                        // },
                    }, 
                    
                               
                },
                select: {
                    color: 'green',                    
                    '&:hover': {                        
                    },
                    '&:focus': {
                        borderRadius: 4,
                        borderColor: '#80bdff',
                        boxShadow: "0 0 0 0.5rem rgba(0, 123, 255, .25)",
                    },
                    // '&.Mui-focusVisible':{
                    //     outline:'none'
                    //     // borderColor: '#80bdff',
                    //     // outline: '1px solid orange'
                    // }
                   
                },
                icon: {
                     fontSize: '2rem',
                     color: '#000',
                     marginRight: '12px',
                    //  marginRight: spacing(1.5),
                },  
                   
                }   
            },
           
            MuiInputBase:{                
                styleOverrides: {
                    root: {                         
                        '&:hover': {
                            backgroundColor: "pink",                        
                            "&:hover fieldset": {
                                borderColor: "#bcbcbc", // оставляем начальный цвет границы                          
                            },                            
                        }, 
                        
                    },
                    input: {
                        // backgroundColor: "yellow",
                        // border: '1px solid #ced4da',
                        // '&:hover': {                          
                       
                        // },
                        // '&.Mui-active': {
                           
                        // },
                        // '&:focus': {
                            
                        // },
                        // '&.Mui-focusVisible':{                           
                        // }                       
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'yellow',                        
                    }
                }
            },

            MuiMenuItem:{
                styleOverrides: {
                    root: {
                        backgroundColor: 'grey',
                        ':hover':{
                            backgroundColor: 'green',                            
                        },
                        '&.Mui-selected':{
                            backgroundColor: 'lightblue',                            
                        },
                        '&.Mui-focusVisible:not(&:hover)': {
                            backgroundColor: 'grey'
                        }
                    }}
            }
        },
    });

    //Другой способ стилизовать

    const MySelect = styled(Select)(({ theme }) => ({
        width: 300,
        color: theme.palette.success.main,
        
        // // '& .MuiSelect-select ': {
        // backgroundColor: '#999999',
        // border: '1px dashed #000'
        // // }
        // ,
        
        // // '&.Mui-active': {
        // //     border: '1px solid #ff0000'
        // // },

        // '& .MuiMenuItem-root': {
        //     backgroundColor: '#999999'
        // }

        // '& .MuiSlider-thumb': {
        //   '&:hover, &.Mui-focusVisible': {
        //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
        //   },
        //   '&.Mui-active': {
        //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
        //   },
        // },
      }));

    const StyledInput = styled(InputBase)(({theme}) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    }, 
    '& .MuiSvgIcon-root': {
        fontSize: 38,
        // color: theme.palette.text.secondary,
        color: '#ff0000',
        marginRight: theme.spacing(1.5),
    },
      
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
        '&:hover':{
            backgroundColor: '#999999',
            border: '1px solid green',
        },
       
    },
    }));
    

    const StyledMenuItem = styled(MenuItem)(({theme}) => ({
        
    //     '& .MuiPaper-root': {
    // borderRadius: 6,
    // marginTop: theme.spacing(1),
    // minWidth: 180,
    // color: 'rgb(55, 65, 81)',
    // boxShadow:
    //   'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    // '& .MuiMenu-list': {
    //   padding: '4px 0',
      
    // },
    backgroundColor: '#ff0000',
    width: 350,
    '&:hover': {
        backgroundColor: 'green'
    },
    '&.Mui-selected': {
        backgroundColor: 'blue',
        '&:hover':{
             backgroundColor: 'green'
        }
    },
    '.MuiMenuItem-root': {
        
    },
    '&.Mui-focusVisible:not(&:hover)': {
        backgroundColor: '#999'
    }
    // :not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before
    // }
}))
 
   
    return (
        // <form onSubmit={handleSubmit}>
        <>

        <ThemeProvider theme={theme}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select 
                    
                    sx={{
                        
                        // ':hover':{
                        //     bgcolor: '#999',
                        //     borderColor: (theme) => theme.palette.primary.main,
                        // },
                        
                        // '& .MuiInput-input': {
                        //     bgcolor: 'error.main'
                        // },
                        // '& .MuiMenu-list': {
                        //     backgroundColor: 'yellow'
                        // },
                        // '& .MuiMenu-paper': {
                        //     backgroundColor: 'dark.primary',
                        //     color: 'text.light'
                        // },
                        // '& .MuiMenuItem-root:hover': {
                        //     backgroundColor: 'dark.secondary',
                        //     color: 'text.white'
                        // },
                        // '& .Mui-selected': {
                        //     backgroundColor: 'primary.main',
                        //     color: 'text.white'
                        // }
                
                    }}

                    // labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    // inputProps={{MenuProps: {
                    //     disableScrollLock: true,
                    //     sx:{
                    //         '& .MuiList-root':{
                    //             backgroundColor: 'yellow'   //фон выпадающего списка   
                    //         }
                        
                    //     }
                    // }}} // чтобы у body не менялся паддинг при выпадении меню
                    // input={<StyledInput />} 
                    
                    >
                    <MenuItem value={10}>Ten</MenuItem >
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            </Box>
        </ThemeProvider>

       
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select 
                    
                    sx={{
                        
                        // ':hover':{
                        //     bgcolor: '#999',
                        //     borderColor: (theme) => theme.palette.primary.main,
                        // },
                        
                        // '& .MuiInput-input': {
                        //     bgcolor: 'error.main'
                        // },
                        // '& .MuiMenu-list': {
                        //     backgroundColor: 'yellow'
                        // },
                        // '& .MuiMenu-paper': {
                        //     backgroundColor: 'dark.primary',
                        //     color: 'text.light'
                        // },
                        // '& .MuiMenuItem-root:hover': {
                        //     backgroundColor: 'dark.secondary',
                        //     color: 'text.white'
                        // },
                        // '& .Mui-selected': {
                        //     backgroundColor: 'primary.main',
                        //     color: 'text.white'
                        // }
                  
                    }}

                    // labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    inputProps={{MenuProps: {
                        disableScrollLock: true,
                        sx:{
                            '& .MuiList-root':{
                                backgroundColor: 'yellow'   //фон выпадающего списка   
                            }
                           
                        }
                    }}} // чтобы у body не менялся паддинг при выпадении меню
                    input={<StyledInput />} 
                    
                    >
                    <StyledMenuItem value={10}>Ten</StyledMenuItem >
                    <StyledMenuItem value={20}>Twenty</StyledMenuItem>
                    <StyledMenuItem value={30}>Thirty</StyledMenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            </Box>
       


        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 1, minWidth: 200 }}> 
                <MySelect                                      // без лэйбла
                value={age}
                onChange={handleChange} 
                displayEmpty
                inputProps={{ 'aria-label': 'Without label', MenuProps: {disableScrollLock: true}}}>
            
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </MySelect>
                <FormHelperText>Without label</FormHelperText>
            </FormControl>
        </Box>
      
        
        <div>
            <FormControl sx={{ m: 1, width: 300 }}> 
                <InputLabel id="demo-multiple-name-label">Name</InputLabel> 
                <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple                                               // Множественный выбор
                value={personName}
                onChange={handleMultiChange}
                // input={<OutlinedInput label="Name" />}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />} // Бэйджи
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value}  variant="filled" onClick={handleClick} />
                    ))}
                    </Box>
                )}
                MenuProps={MenuProps}
                inputProps={{MenuProps: {disableScrollLock: true}}} // чтобы у body не менялся паддинг при выпадении меню
                >
                <MenuItem disabled value="">
                    <em>Placeholder</em>
                </MenuItem>
                {names.map((name) => (
                    <MenuItem
                    key={name}
                    value={name}
                    divider="true" //нижняя граница у опций
                    style={getStyles(name, personName, theme2)}
                    >
                    {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </div>

         {/* </form> */}
         
        </>
        
    );
    
      
};
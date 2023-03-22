import { ThemeOptions } from '@mui/material';

const overrides = {
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: 'unset'
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                boxShadow: 'unset'
            }
        }
    },
    MuiTab: {
        styleOverrides: {
            root: {
                '& .MuiTouchRipple-root': {
                    display: 'none'
                }
            }
        }
    }
};

const themeConfig: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#0580dc'
        },
        secondary: {
            main: '#313cad'
        },
        error: {
            main: '#d82620',
            light: '#d04862'
        },
        success: {
            main: '#1ba960'
        },
        background: {
            paper: '#16191c',
            default: '#1d2329'
        }
    },
    typography: {
        fontSize: 14
    },
    shape: {
        borderRadius: 4
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 991,
            lg: 1200,
            xl: 1536
        }
    },
    components: overrides
};

export default themeConfig;

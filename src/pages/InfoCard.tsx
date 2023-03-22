import React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DiamondIcon from '@mui/icons-material/Diamond';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Follow = (params) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" sx={{ p: 2 }}>
                <Stack direction="row" alignItems="center">
                    <Person2OutlinedIcon sx={{ opacity: 0.4 }} />
                    <CheckOutlinedIcon sx={{ color: (theme) => theme.palette.success.main, fontSize: 14 }} />
                </Stack>
                <Stack sx={{ ml: 1 }} alignItems="center">
                    <Typography sx={{ fontSize: 18 }}>2,434</Typography>
                    <Typography sx={{ opacity: 0.4, fontSize: 12 }}>Followers</Typography>
                </Stack>
            </Stack>
            <Box sx={{ width: '1px', height: 30, bgcolor: '#fff', opacity: 0.4 }} />
            <Stack direction="row" alignItems="center" sx={{ p: 2, pr: 0 }}>
                <Stack direction="row" alignItems="center">
                    <Person2OutlinedIcon sx={{ opacity: 0.4 }} />
                    <AddOutlinedIcon sx={{ color: (theme) => theme.palette.primary.main, fontSize: 14 }} />
                </Stack>
                <Stack sx={{ ml: 1 }} alignItems="center">
                    <Typography sx={{ fontSize: 18 }}>2,434</Typography>
                    <Typography sx={{ opacity: 0.4, fontSize: 12 }}>Following</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

const GridChart = (params) => {
    const list = [
        {
            number: '475',
            title: 'total tips'
        },
        {
            number: '98.57',
            title: 'Avg odds'
        },
        {
            number: '98.57',
            title: 'Win rate'
        },
        {
            number: '30,03',
            title: 'Total Units'
        },
        {
            number: '3,576',
            title: 'Profit'
        },
        {
            number: '30%',
            title: 'ROI'
        }
    ];
    return (
        <Grid container spacing={2}>
            {list.map(({ number, title }: any, i) => (
                <Grid item md={12 / 6} key={i}>
                    <Stack alignItems="center" sx={{ borderRadius: 2, border: '1px solid gray', px: 3, py: 2 }}>
                        <Typography>{number}</Typography>
                        <Typography sx={{ opacity: 0.4, fontSize: 12 }}>{title}</Typography>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
};

const Sports = (params) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" sx={{ ml: 15 }}>
                <IconButton
                    sx={{
                        border: '1px solid #888b8f',
                        p: 0.8,
                        bgcolor: (theme: any) => theme.palette.secondary.light
                    }}
                >
                    <DiamondIcon sx={{ opacity: 0.4 }} />
                </IconButton>
                <Box sx={{ bgcolor: '#888b8f', width: '1px', height: 30, mr: 1, ml: 2 }} />
                <IconButton sx={{ border: '1px solid #888b8f', p: 0.8, ml: 1 }}>
                    <SportsSoccerIcon sx={{ opacity: 0.4 }} />
                </IconButton>
                <IconButton sx={{ border: '1px solid #888b8f', p: 0.8, ml: 1 }}>
                    <SportsTennisIcon sx={{ opacity: 0.4 }} />
                </IconButton>
                <IconButton sx={{ border: '1px solid #888b8f', p: 0.8, ml: 1 }}>
                    <SportsHockeyIcon sx={{ opacity: 0.4 }} />
                </IconButton>
            </Stack>
            <Follow />
        </Stack>
    );
};

const Footer = (params) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                mt: 2,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between'
            }}
        >
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                        '& .MuiTab-root': {
                            fontSize: 12,
                            textTransform: 'capitalize',
                            px: 0,
                            minWidth: 0,
                            mx: 1
                        },
                        '& .Mui-selected': {
                            color: '#fff !important'
                        }
                    }}
                >
                    <Tab label="About" />
                    <Tab label="Tips" />
                    <Tab label="Blog" />
                    <Tab label="Stats" />
                    <Tab label="Results" />
                    <Tab label="Subscription" />
                </Tabs>
            </Box>
            <Stack direction="row" alignItems="center">
                <IconButton sx={{ bgcolor: (theme: any) => theme.palette.primary.main }}>
                    <ShareOutlinedIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <Button variant="contained" sx={{ py: 0.5, borderRadius: 2, ml: 2 }}>
                    Add Post
                </Button>
            </Stack>
        </Box>
    );
};

const AvatarFollow = (params) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <Box
                sx={{
                    backgroundImage: 'url(https://1win.pro/img/bonus_hover_1.f76a358c-1600.webp)',
                    height: 300,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
                sx={{ px: 3, position: 'absolute', bottom: -60, width: '100%', zIndex: 2 }}
            >
                <Stack direction="row">
                    <Stack alignItems="center">
                        <Box sx={{ mb: 1 }}>
                            <Avatar
                                src="https://mui.com/static/images/avatar/3.jpg"
                                alt="Remy Sharp"
                                sx={{ width: 90, height: 90 }}
                            />
                        </Box>
                        <Stack alignItems="center">
                            <Box>
                                <Typography component="span" sx={{ fontSize: 12 }}>
                                    Professional
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                    <Box sx={{ ml: 4 }}>
                        <Stack direction="row" alignItems="center">
                            <Box component="img" src={require('assets/img/flag/GB.png')} alt="country" />
                            <Typography sx={{ fontSize: 12, ml: 1 }}>Great britain</Typography>
                        </Stack>
                        <Typography variant="h5">Emily Baker</Typography>
                    </Box>
                </Stack>

                <Stack direction="row" alignItems="center">
                    <Button variant="contained" color="success" startIcon={<LockOutlinedIcon />}>
                        Subscrive from $75
                    </Button>
                    <Button variant="contained" sx={{ ml: 1 }}>
                        Follow
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

const Man = (params) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                top: -22,
                zIndex: 1
            }}
        >
            <Box component="img" src={require('assets/img/bg/1.png')} sx={{ height: 362 }} />
        </Box>
    );
};

const InfoCard = () => {
    return (
        <Box sx={{ position: 'relative', mb: 4 }}>
            <Man />
            <Card sx={{ borderRadius: 4, mt: 5, bgcolor: '#ffffff00' }}>
                <AvatarFollow />
                <Stack className="card" sx={{ px: 3 }}>
                    <Sports />
                    <GridChart />
                    <Footer />
                </Stack>
            </Card>
        </Box>
    );
};

export default InfoCard;

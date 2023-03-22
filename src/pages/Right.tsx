import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { StyledBadge } from 'components/Custom';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const ChartPart = () => {
    const series = [
        {
            name: '',
            data: new Array(30).fill(0).map(() => {
                return Math.round(Math.random() * 100);
            })
        }
    ];
    const options: ApexOptions = {
        chart: {
            background: '#1d2329',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        stroke: {
            curve: 'straight',
            width: 2,
            colors: ['#1baa61'],
            lineCap: 'round'
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            show: false
        },
        grid: {
            show: false
        },
        tooltip: {
            x: {
                show: false
            },
            shared: false
        },
        legend: {
            show: false
        },
        theme: {
            mode: 'dark',
            palette: 'palette4'
        },
        markers: {
            size: 0,
            fillOpacity: 0,
            strokeWidth: 0,
            shape: 'circle'
        },
        dataLabels: {
            enabled: false
        }
    };
    const [anchorEl1, setAnchorEl1] = useState<HTMLButtonElement | null>(null);
    const open1 = Boolean(anchorEl1);

    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl1(null);
    };

    return (
        <Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                    <Button
                        onClick={handleClick1}
                        endIcon={<ArrowDropDownIcon />}
                        sx={{ color: '#fff', p: 0, minWidth: 0, fontSize: 14 }}
                    >
                        Your Balance
                    </Button>
                    <Popover
                        open={open1}
                        anchorEl={anchorEl1}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                    >
                        <Typography sx={{ px: 2, py: 1 }}>This is your balance</Typography>
                    </Popover>
                </Box>
                <Stack direction="row" alignItems="flex-end">
                    <Typography sx={{ fontSize: 12, textTransform: 'uppercase', opacity: 0.4, mr: 2, mb: 0.2 }}>
                        units
                    </Typography>
                    <Typography sx={{ fontSize: 18 }}>345,45</Typography>
                </Stack>
            </Stack>
            <ReactApexChart options={options} series={series} type={'area'} height={200} />
        </Stack>
    );
};

const WalletHeader = () => {
    const [age, setAge] = useState('10');
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
            <Stack direction="row" alignItems="center">
                <IconButton sx={{ bgcolor: '#ffffff2b', mr: 1, '&:hover': { '& svg': { opacity: 1 } } }}>
                    <AccountBalanceWalletIcon sx={{ opacity: 0.4 }} />
                </IconButton>
                <Stack>
                    <Typography>3,658</Typography>
                    <Button
                        onClick={handleClick}
                        endIcon={<ArrowDropDownIcon />}
                        sx={{ color: '#fff', p: 0, minWidth: 0, opacity: 0.4, fontSize: 12 }}
                    >
                        ROL
                    </Button>
                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                    >
                        <Typography sx={{ px: 2, py: 1 }}>This is ROL</Typography>
                    </Popover>
                </Stack>
            </Stack>
            <Select value={age} onChange={handleChange} sx={{ '& .MuiSelect-select': { py: 1, fontSize: 14 } }}>
                <MenuItem sx={{ opacity: 0.7 }} value={10}>{`15:41(GMT+1)`}</MenuItem>
                <MenuItem sx={{ opacity: 0.7 }} value={20}>{`16:41(GMT+2)`}</MenuItem>
                <MenuItem sx={{ opacity: 0.7 }} value={30}>{`17:41(GMT+3)`}</MenuItem>
            </Select>
        </Stack>
    );
};

const BetCard = () => {
    return (
        <Card sx={{ borderRadius: 4, bgcolor: '#ffffff00', p: 2, mb: 3 }} className="card">
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography sx={{ fontSize: 12, opacity: 0.4 }}>16:01, 12 oct 2023</Typography>
                <Typography sx={{ fontSize: 14, color: (theme: any) => theme.palette.success.main }}>+1.045</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center">
                    <Avatar
                        src="https://mui.com/static/images/avatar/1.jpg"
                        alt="Remy Sharp"
                        sx={{ width: 22, height: 22 }}
                    />
                    <Typography sx={{ fontSize: 14, ml: 1 }}>Skava Jirbukiv</Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                    <Box
                        component="img"
                        src={require('assets/img/team/1.png')}
                        alt="team1"
                        sx={{ width: 25, height: 25 }}
                    />
                    <Typography sx={{ opacity: 0.4, fontSize: 12, mx: 1 }}>VS</Typography>
                    <Box
                        component="img"
                        src={require('assets/img/team/2.png')}
                        alt="team2"
                        sx={{ width: 25, height: 25 }}
                    />
                </Stack>
            </Stack>
        </Card>
    );
};

const TopFollow = () => {
    return (
        <Stack sx={{ mb: 3 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: 18 }}>Top following</Typography>
                <Button sx={{ fontSize: 12, opacity: 0.4, color: '#fff', minWidth: 0 }}>ALL</Button>
            </Stack>
            <Box>
                <Grid container spacing={2}>
                    {new Array(10).fill(0).map((_, i) => (
                        <Grid
                            key={i}
                            item
                            md={12 / 5}
                            sm={12 / 3}
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <StyledBadge
                                key={i}
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://mui.com/static/images/avatar/2.jpg"
                                    sx={{ cursor: 'pointer' }}
                                />
                            </StyledBadge>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
};

const Notificatoins = () => {
    return (
        <Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: 18 }}>Notifications</Typography>
                <Button sx={{ fontSize: 12, opacity: 0.4, color: '#fff', minWidth: 0 }}>ALL FEED</Button>
            </Stack>
            <Stack>
                <Stack spacing={2}>
                    {new Array(4).fill(0).map((_, e) => (
                        <Stack key={e} direction="row" alignItems="center" sx={{ cursor: 'pointer' }}>
                            <Stack alignItems="center">
                                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                                <Typography sx={{ color: (theme: any) => theme.palette.success.main, fontSize: 12 }}>
                                    +4,3%
                                </Typography>
                            </Stack>
                            <Stack sx={{ ml: 2 }}>
                                <Typography sx={{ fontSize: 16 }}>Della Parker</Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 300, opacity: 0.4, mt: 0.5, mb: 1 }}>
                                    +23456 profit on Horse Racing
                                </Typography>
                                <Typography sx={{ fontSize: 12, fontWeight: 300, opacity: 0.4 }}>04:20PM</Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

const Right = () => {
    return (
        <Box sx={{ mr: 2, my: 2 }}>
            <WalletHeader />
            <ChartPart />
            <BetCard />
            <TopFollow />
            <Notificatoins />
        </Box>
    );
};

export default Right;

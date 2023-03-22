import { Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import FilterListIcon from '@mui/icons-material/FilterList';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ReplyIcon from '@mui/icons-material/Reply';

const Toolbar = (params) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Button
                variant="outlined"
                sx={{ color: 'gray', borderColor: 'gray', borderRadius: 2, fontSize: 12, py: 1 }}
                startIcon={<FilterListIcon />}
            >
                Show Filters
            </Button>
            <AvatarGroup>
                <Avatar
                    alt="Remy Sharp"
                    src={require('assets/img/team/1.png')}
                    sx={{
                        padding: '0px',
                        borderColor: '#343e47 !important',
                        bgcolor: (theme: any) => theme.palette.background.default,
                        '& img': {
                            width: '60%',
                            height: '60%'
                        }
                    }}
                />
                <Avatar
                    alt="Remy Sharp"
                    src={require('assets/img/team/2.png')}
                    sx={{
                        padding: '0px',
                        borderColor: '#343e47 !important',
                        bgcolor: (theme: any) => theme.palette.background.default,
                        '& img': {
                            width: '60%',
                            height: '60%'
                        }
                    }}
                />
            </AvatarGroup>
        </Stack>
    );
};

const LoadStep = ({ textAlign, top }) => {
    return (
        <Box sx={{ position: 'relative', mt: top }}>
            <Typography sx={{ opacity: 0.4, fontSize: 12, textAlign, mb: 1 }}>Thu 16 Apr, 2018 18:00</Typography>
            <Box
                sx={{
                    height: 14,
                    width: 14,
                    zIndex: 1,
                    borderRadius: 50,
                    bgcolor: '#666a6e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0,
                    [textAlign]: -24
                }}
            >
                <Box
                    sx={{
                        height: 8,
                        width: 8,
                        borderRadius: 50,
                        bgcolor: (theme: any) => theme.palette.background.default
                    }}
                />
            </Box>
            <Card sx={{ maxWidth: 400, p: 2, borderRadius: 4, bgcolor: '#ffffff00' }} className="card">
                <Stack direction="row" alignItems="center" sx={{ ml: 1.5, mb: 2 }}>
                    <Box
                        sx={{
                            width: 33,
                            height: 33,
                            borderRadius: 50,
                            border: '2px solid #343e47',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Box
                            component="img"
                            src={require('assets/img/team/3.png')}
                            alt="team"
                            sx={{ width: 24, height: 24, borderRadius: 50 }}
                        />
                    </Box>
                    <Typography sx={{ fontSize: 14, opacity: 0.4, ml: 2 }}>English Premier League</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                    <Stack direction="row" sx={{ height: 140 }}>
                        <Stack
                            alignItems="center"
                            sx={{
                                borderRadius: 4,
                                bgcolor: '#abecff12',
                                py: 3,
                                px: 2,
                                position: 'relative',
                                overflow: 'hidden',
                                '&:before': {
                                    content: `""`,
                                    width: 45,
                                    height: 45,
                                    position: 'absolute',
                                    top: -30,
                                    borderRadius: 50,
                                    bgcolor: '#00ff86'
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={require('assets/img/team/1.png')}
                                alt="team"
                                sx={{ width: 25, height: 25, borderRadius: 50 }}
                            />
                            <Typography sx={{ fontSize: 12, my: 2 }}>vs</Typography>
                            <Box
                                component="img"
                                src={require('assets/img/team/2.png')}
                                alt="team"
                                sx={{ width: 25, height: 25, borderRadius: 50 }}
                            />
                        </Stack>
                        <Stack sx={{ ml: 2, height: '100%' }} justifyContent="space-between">
                            <Box sx={{ mt: 1 }}>
                                <Typography sx={{ fontSize: 10, opacity: 0.4 }}>976 tips</Typography>
                                <Typography>Southampton</Typography>
                            </Box>
                            <Box sx={{ mb: 1 }}>
                                <Typography sx={{ fontSize: 10, opacity: 0.4 }}>976 tips</Typography>
                                <Typography>Southampton</Typography>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack alignItems="flex-end">
                        <Typography sx={{ fontSize: 16 }}>18:00</Typography>
                        <Typography sx={{ fontSize: 12, opacity: 0.4 }}>16 Apr, 2023</Typography>
                    </Stack>
                </Stack>
                <Divider sx={{ mx: -2, my: 2 }} />
                <Stack>
                    <Typography sx={{ fontSize: 14 }}>#Southampton to win @Bet365</Typography>
                    <Typography sx={{ fontSize: 14, opacity: 0.4, mb: 2 }}>
                        In defense you'd back Taphael Varne and maybe Menjamin Mendy to come in.
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item md={12 / 3}>
                            <Button
                                variant="contained"
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    width: '100%',
                                    flexDirection: 'column',
                                    color: '#fff',
                                    bgcolor: '#38424b',
                                    '&:hover': { bgcolor: '#38424b' }
                                }}
                            >
                                <Typography sx={{ fontSize: 14 }}>10</Typography>
                                <Typography sx={{ fontSize: 10, opacity: 0.4, textTransform: 'capitalize' }}>
                                    Stake
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item md={12 / 3}>
                            <Button
                                variant="contained"
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    width: '100%',
                                    flexDirection: 'column',
                                    bgcolor: '#38424b',
                                    '&:hover': { bgcolor: '#38424b' }
                                }}
                            >
                                <Typography sx={{ fontSize: 14 }}>9</Typography>
                                <Typography sx={{ fontSize: 10, opacity: 0.4, textTransform: 'capitalize' }}>
                                    Odds
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item md={12 / 3}>
                            <Button
                                color="success"
                                variant="contained"
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    width: '100%',
                                    flexDirection: 'column',
                                    color: '#00fb84',
                                    bgcolor: '#00fb8452',
                                    '&:hover': { bgcolor: '#00fb8452' }
                                }}
                            >
                                <Typography sx={{ fontSize: 14 }}>+12</Typography>
                                <Typography sx={{ fontSize: 10, opacity: 0.4, textTransform: 'capitalize' }}>
                                    Profit
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Stack>
                                <Typography sx={{ fontSize: 10, opacity: 0.4 }}>Likes</Typography>
                                <Typography sx={{ fontSize: 14 }}>1.4k</Typography>
                            </Stack>
                            <Stack>
                                <Typography sx={{ fontSize: 10, opacity: 0.4 }}>Reposts</Typography>
                                <Typography sx={{ fontSize: 14 }}>123</Typography>
                            </Stack>
                            <Stack>
                                <Typography sx={{ fontSize: 10, opacity: 0.4 }}>Views</Typography>
                                <Typography sx={{ fontSize: 14 }}>10.4k</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <IconButton sx={{ bgcolor: '#ffffff54' }}>
                                <ThumbUpOffAltIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                            <IconButton sx={{ bgcolor: (theme: any) => theme.palette.primary.main }}>
                                <ShareOutlinedIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                            <IconButton sx={{ bgcolor: (theme: any) => theme.palette.primary.main }}>
                                <ReplyIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Stack>
            </Card>
        </Box>
    );
};

const LoadMap = (params) => {
    return (
        <Box>
            <Toolbar />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: -1 }}>
                <LoadStep textAlign={'right'} top={5} />
                <Box sx={{ position: 'relative', width: '2px', bgcolor: '#ffffff52', mx: 2 }}>
                    <Stack direction="row" alignItems="center" sx={{ position: 'absolute', top: -40, left: -25 }}>
                        <Avatar
                            src="https://mui.com/static/images/avatar/3.jpg"
                            alt="Remy Sharp"
                            sx={{ width: 50, height: 50 }}
                        />
                        <Box sx={{ ml: 1 }}>
                            <Typography sx={{ fontSize: 14, whiteSpace: 'nowrap' }}>Result pending tips</Typography>
                            <Typography sx={{ fontSize: 12, whiteSpace: 'nowrap', opacity: 0.4 }}>
                                All Emily tips
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
                <LoadStep textAlign={'left'} top={10} />
            </Box>
        </Box>
    );
};

export default LoadMap;

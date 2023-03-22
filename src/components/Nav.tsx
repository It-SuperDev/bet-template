import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';

import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const SettingHeader = (params) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <IconButton>
                <ViewStreamIcon sx={{ opacity: 0.4 }} />
            </IconButton>
            <Typography variant="h5">ValueBet</Typography>
            <IconButton>
                <SettingsIcon sx={{ opacity: 0.4 }} />
            </IconButton>
        </Stack>
    );
};

const AvatarPart = (params) => {
    return (
        <Stack alignItems="center" sx={{ my: 5 }}>
            <Box sx={{ mb: 1 }}>
                <Badge
                    variant="dot"
                    color="success"
                    overlap="circular"
                    badgeContent=" "
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    sx={{
                        '& .MuiBadge-badge': {
                            right: 4,
                            bottom: 4
                        }
                    }}
                >
                    <Avatar
                        src="https://mui.com/static/images/avatar/1.jpg"
                        alt="Remy Sharp"
                        sx={{ width: 90, height: 90 }}
                    />
                </Badge>
            </Box>
            <Stack alignItems="center">
                <Typography variant="h5">Slava Kornilov</Typography>
                <Box>
                    <Typography component="span" sx={{ opacity: 0.4, fontSize: 14 }}>
                        Professional
                    </Typography>
                    <Typography component="span" sx={{ opacity: 0.4, fontSize: 14, mx: 0.5 }}>
                        ●
                    </Typography>
                    <Typography component="span" sx={{ fontSize: 14, color: (theme) => theme.palette.error.light }}>
                        5 Level
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    );
};

const Follow = (params) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
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
            <Box sx={{ width: '1px', height: 60, bgcolor: '#fff', opacity: 0.4 }} />
            <Stack direction="row" alignItems="center" sx={{ p: 2 }}>
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

const MainList = (params) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav">
            <ListItemButton>
                <ListItemIcon>
                    <FolderOpenOutlinedIcon sx={{ opacity: 0.4 }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: 0.4 }} />
                <Typography sx={{ opacity: 0.4, fontSize: 12 }}>234</Typography>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ContentCopyOutlinedIcon sx={{ opacity: 0.4 }} />
                </ListItemIcon>
                <ListItemText primary="My feed" sx={{ opacity: 0.4 }} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <FilterAltOutlinedIcon sx={{ opacity: 0.4 }} />
                </ListItemIcon>
                <ListItemText primary="Tipsters" sx={{ opacity: 0.4 }} />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <SendOutlinedIcon sx={{ opacity: 0.4 }} />
                </ListItemIcon>
                <ListItemText primary="Hot Tips" sx={{ opacity: 0.4 }} />
            </ListItemButton>
        </List>
    );
};

const FavoriteLeague = (params) => {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', my: 2 }}
            component="nav"
            subheader={
                <ListSubheader component="div">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography sx={{ fontSize: 14 }}>Favorite League</Typography>
                        <Button
                            sx={{
                                fontSize: 12,
                                color: '#fff',
                                minWidth: 0,
                                opacity: 0.5,
                                py: 0.5,
                                px: 2,
                                mr: -2
                            }}
                        >
                            Add
                        </Button>
                    </Stack>
                </ListSubheader>
            }
        >
            <ListItemButton>
                <ListItemIcon>
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
                </ListItemIcon>
                <ListItemText primary="Premier League" sx={{ opacity: 0.4 }} />
                <IconButton sx={{ p: 0 }}>
                    <StarIcon sx={{ fontSize: 16, color: 'gold' }} />
                </IconButton>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
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
                            src={require('assets/img/team/1.png')}
                            alt="team"
                            sx={{ width: 24, height: 24, borderRadius: 50 }}
                        />
                    </Box>
                </ListItemIcon>
                <ListItemText primary="Evropa" sx={{ opacity: 0.4 }} />
                <IconButton sx={{ p: 0 }}>
                    <StarIcon sx={{ fontSize: 16, color: 'gold' }} />
                </IconButton>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
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
                            src={require('assets/img/team/2.png')}
                            alt="team"
                            sx={{ width: 24, height: 24, borderRadius: 50 }}
                        />
                    </Box>
                </ListItemIcon>
                <ListItemText primary="Laliga" sx={{ opacity: 0.4 }} />
                <IconButton sx={{ p: 0 }}>
                    <StarIcon sx={{ fontSize: 16, color: 'gold' }} />
                </IconButton>
            </ListItemButton>
        </List>
    );
};

const FavoriteClub = (params) => {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', my: 2 }}
            component="nav"
            subheader={
                <ListSubheader component="div">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography sx={{ fontSize: 14 }}>Favorite Club</Typography>
                        <Button
                            sx={{
                                fontSize: 12,
                                color: '#fff',
                                minWidth: 0,
                                opacity: 0.5,
                                py: 0.5,
                                px: 2,
                                mr: -2
                            }}
                        >
                            Add
                        </Button>
                    </Stack>
                </ListSubheader>
            }
        >
            <ListItemButton>
                <ListItemIcon>
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
                </ListItemIcon>
                <ListItemText primary="TSG 1899 Hoffenheim" sx={{ opacity: 0.4 }} />
                <IconButton sx={{ p: 0 }}>
                    <StarIcon sx={{ fontSize: 16, color: 'gold' }} />
                </IconButton>
            </ListItemButton>
        </List>
    );
};

const Nav = () => {
    return (
        <Box sx={{ height: '100%', m: 2 }}>
            <SettingHeader />
            <AvatarPart />
            <Follow />
            <Stack>
                <MainList />
                <FavoriteLeague />
                <FavoriteClub />
            </Stack>
        </Box>
    );
};

export default Nav;

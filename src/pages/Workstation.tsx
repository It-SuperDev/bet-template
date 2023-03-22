import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Nav from 'components/Nav';
import Right from './Right';
import Main from './Main';

const Workstation = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Stack
                sx={{
                    overflow: 'auto',
                    height: '100vh',
                    width: '20%',
                    bgcolor: (theme) => theme.palette.background.paper
                }}
            >
                <Nav />
            </Stack>
            <Stack sx={{ overflow: 'auto', pb: 4, height: '100vh', width: '58%' }}>
                <Main />
            </Stack>
            <Stack
                sx={{
                    overflow: 'auto',
                    height: '100vh',
                    width: '22%',
                    pl: 2
                }}
            >
                <Right />
            </Stack>
        </Box>
    );
};

export default Workstation;

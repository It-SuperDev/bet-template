import Stack from '@mui/material/Stack';

import LoadMap from './LoadMap';
import InfoCard from './InfoCard';

const Main = () => {
    return (
        <Stack sx={{ px: 6 }}>
            <InfoCard />
            <LoadMap />
        </Stack>
    );
};

export default Main;

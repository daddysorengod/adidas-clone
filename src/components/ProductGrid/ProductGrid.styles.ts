import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr) !important',
        },
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr) !important',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr) !important',
        },
        [theme.breakpoints.up('xl')]: {
            gridTemplateColumns: 'repeat(4, 1fr) !important',
        },
    },

}))

export default useStyles
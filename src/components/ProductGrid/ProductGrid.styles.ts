import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        marginBottom: '20px'
    }
}))

export default useStyles
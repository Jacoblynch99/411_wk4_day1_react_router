import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    carName: {
        fontSize: 25,
        fontWeight: 'bolder',
        marginBottom: 15,
    },
    carPaper: {
        marginTop: 40,
        paddingTop: 50,
        paddingBottom: 50,
    },
    gridContainer: {
        marginTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
    },
    gridItem: {
        marginTop: 10,
        marginBottom: 10,
    },
    navText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    navListItem: {
        fontSize: 24,
        margin: 20,
    },
    darkToggle: {
        marginTop: 12,
    },
    linkColor: {
        color: 'blue',
    },
})

export default useStyles

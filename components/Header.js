// import Link from 'next/link';

// const linkStyle = {
//     marginRight: 15
// };

// export default function Header() {
//     return (
//         <div>
//             <Link href="/">
//                 <a style={linkStyle}>Home</a>
//             </Link>
//             <Link href="/about">
//                 <a style={linkStyle}>About</a>
//             </Link>
//         </div>
//     );
// };
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        height: 50,
        padding: '0 30px',
    },
    link: {
        color: 'white',
        paddingLeft: '10px', 
    }
});

export default function Header() {
    const classes = useStyles();
    return (
    <AppBar position="fixed">
        <Toolbar className={classes.root}>
            <Typography variant="h6" noWrap>
                <Link className={classes.link} href="/">
                    Home
                </Link>
                <Link className={classes.link} href="/about">
                    Form
                </Link>
            </Typography>
        </Toolbar>
    </AppBar>);
}
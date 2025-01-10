import { Button, Container } from "@mui/material"
import { Link } from "react-router"

const  NavBar=()=>{ 

    return(<>
        {/* <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </nav> */}
        <Container sx={{display: 'flex', justifyContent: 'flex-end',margin:2.5,marginTop:3.5,marginRight:3.2}}>
        <Button sx={{height:"35px",fontSize:'19px', textTransform: 'none' ,marginLeft:1.5}} 
            component={Link} to="/" >
            Home
        </Button>
        <Button sx={{height:"35px",fontSize:'19px', textTransform: 'none' ,marginLeft:1.5}} 
            component={Link} to="/about" >
            About
        </Button>
        </Container>

      
       
    </>)
}
export default NavBar
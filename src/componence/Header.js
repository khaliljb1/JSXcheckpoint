import '../styles/Header.css'
import Navbar  from'./Navbar'

function Header (props){
   console.log(props.message);
  return<header>
        <p>logo</p>
        <Navbar message={props.message} />
    </header>
}
Header.defaultProps = {
    message:'Hello user'
}
export default Header
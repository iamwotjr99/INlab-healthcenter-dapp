import { Nav, Container, Navbar, Form, Button, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import banner from '../../image/banner.jpg'
import Header from '../user/userHeader'
function User() {
    const navigate = useNavigate();
    const onClickBtn = () => {
        navigate('/hospital');
    }
    return (
        <div className='user'>
            <Header />
            <div className='login_container'>
                <div className='item_login'>
                    <Form className='login_form'>
                        <span>Sign in</span>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={onClickBtn}>
                            Sign in
                        </Button>
                    </Form>
                </div>
                <div className='item_img'>
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
    )
}

export default User;
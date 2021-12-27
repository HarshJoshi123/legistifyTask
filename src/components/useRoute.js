import { useNavigate } from 'react-router-dom';

function useRoute() {
	const history = useNavigate();

	const landing     = ()   => history('/')
	const login   = ()   => history("/login")
	const signup = ()   => history("/signup")
	return {
		landing,
		login,
        signup
	}
}

export default useRoute
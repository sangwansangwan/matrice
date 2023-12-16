import axiosInstance from '../../common/axios.service';

const login = ({
  userId,
  password,
}: {
  userId: string;
  password: string;
}) => {
  return axiosInstance
    .post('auth/login', {
      userId,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response;
    });
};


const signup = ({
  email,
  name,
  userName,
  password,
}: {
  userName: string;
  password: string;
  email:string,
  name:string,
}) => {
  return axiosInstance
    .post('user/signup', {
      userName,
      email,
      name,
      password,
    })
    .then((response) => {
      return response;
    });
};

const authService = {
  login,
  signup
};

export default authService;

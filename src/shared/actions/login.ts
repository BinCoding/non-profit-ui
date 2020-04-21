export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

type LoginParams = {
  username: string,
  password: string
}

export const login = ({
  username,
  password
}: LoginParams) => {
  return async (dispatch: Function) => {
    console.log(process.env)
    try {
      dispatch({ type: LOGIN_REQUEST });
      const response = await fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
      });
      console.log(response);
      dispatch({ type: LOGIN_SUCCESS });
    }
    catch (error) {
      dispatch({ type: LOGIN_FAILURE });
    }
  }
}
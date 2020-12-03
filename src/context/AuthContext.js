import createDataContext from "./createDataContext";
import demoApi from "../api/demo";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "sign_in":
      return {
        errorMessage: "",
        token: action.payload.token,
        uid: action.payload.id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
      };
    default:
      return state;
  }
};

const signIn = (dispatch) => async ({ email, password }) => {
  try {
    const { data } = await demoApi.post("/auth", { email, password });
    dispatch({ type: "sign_in", payload: data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "Please try again.",
    });
  }
};

const signOut = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut },
  { token: null, errorMessage: "", first_name: "", last_name: "", uid: "" }
);

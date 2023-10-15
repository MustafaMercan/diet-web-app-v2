import { postRequest, baseUrl } from "../services/services";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

//post submit
export const registerSubmitHandler = async (params) => {

    const { event, setForm, information, url } = params;

    event.preventDefault();
    console.log(information)
    if (event !== null && information !== null) {
        const response = await postRequest(`${baseUrl}${url}`, information);
        if (response.error) {
            return setForm(
                response
            )
        }
        return setForm(
            response
        )
    }
}


export const loginSubmitHandler = async (params) => {


    const { event, setForm, data, url } = params;

    event.preventDefault();

    console.log(`event -> ${event} \n setForm -> ${setForm} \n data -> ${data.password} \n url -> ${url}\n`)

    if (event !== null && data !== null) {
        const response = await postRequest(`${baseUrl}${url}`, data);
        setForm(
            response
        )
    }
}
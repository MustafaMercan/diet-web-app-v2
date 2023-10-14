import { postRequest, baseUrl} from "../services/services";
import { useNavigate } from "react-router-dom";
export const submitHandler = async(params) => {

    //event, messageForm, setMessageForm, information
    const {event,setForm,information,url} = params;
    event.preventDefault();    
    if(event !== null && information !== null)
    {
        const response = await postRequest(`${baseUrl}${url}`,information);
        
        if(response.error){
            return setForm(
                response
            )
        }
        return setForm(
            response
        )
    }
}
export const baseUrl = "http://localhost:3000/api";

export const postRequest = async(url,body) => {
    const response = await fetch(url,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
        
    const data = await response.json();

    if(!response.ok){
        let message;
        if(data?.message) message=data.message;
        else message = data;

        return{error:true,message}
    }
    return data;
}

export const getRequest = async(url) => {
    const response = await fetch(url);
    const data = await response.json();

    if(!response.ok){
        let message;
        if(data?.message) message = data.message;
        else message = data;
        return {message:data}
    }
    return data;
}

export const deleteRequest = async(url) => {
    const response = await fetch(url,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
        },
    });

    const data = response.json();

    if(!response.ok){
        let message;
        if(data?.message) message = data.message;
        else message = data
        return{message}
    }
    return data
}

export const updateRequest = async(url,body) => {
    const response = await fetch(url,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(body)
    })

    const data = response.json();
    if(response.ok){
        let message;
        if(data?.message) message = data.message
        else message = data
        return{message}
    }
    return data
}
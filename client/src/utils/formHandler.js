export const formHandler = (params) => {
    const {event, form, setForm} = params;
    if(event !== null && event !== undefined){
        const {name,value} = event.target;
        setForm({
            ...form,
            [name]:value,
        })

        console.log(form)
    }
}
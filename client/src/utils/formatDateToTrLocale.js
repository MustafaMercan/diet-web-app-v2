export const formatDateToTrLocale = (dateTimeString) => {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }
    console.log('sa');
    const date = new Date(dateTimeString);
    return date.toLocaleDateString('tr-TR', options);
}


export const formatDateHourTrLocale = (dateTimeString) => {

    const date = new Date(dateTimeString);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    return formattedTime;
}
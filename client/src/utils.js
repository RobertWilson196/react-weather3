export const convertTimeStamp = (seconds) => 
{
    const d = new Date(seconds*1000); // s -> ms
    //format : HH:MM mm/dd/YYYY 
    if (d.getHours() > 12)
    {
        const suffix = 'PM';
    }
    else
    {
        const suffix = 'AM';
    }
    
    const hours = (d.getHours()%12);
    const minutes = d.getMinutes();

    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
 
    return `${hours} ${month}/${day}/${year}  ` 
}

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const dateConversion = (dateString) => {
    let utcDate = ''
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    if (typeof dateString != 'undefined' && dateString != '') {
        let userOffset = new Date().getTimezoneOffset()*60*1000;
        let localDate = new Date(dateString);
        utcDate = new Date(localDate.getTime() + userOffset);
        const year = utcDate.getFullYear();
        const month = monthNames[utcDate.getMonth()];
        const date = utcDate.getDate();
        return date + ' ' + month + ', ' + year;
    }
    
    return utcDate
}
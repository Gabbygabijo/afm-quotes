export const fknPayMe =(due)=>{
    const dueDate  = new Date(due);
    const currentDate = new Date();
    const daysDeadLine = 30;
    const days = Math.floor(
        (dueDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const opacity = days > 0 ? 1 : 1 - Math.abs(days) / daysDeadLine;
    return opacity;
}
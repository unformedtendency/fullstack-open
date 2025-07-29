const NotificationBanner = ({message,type})=>{
    if(message){
        return <p className={`notification ${type}`} >{message}</p>
    } else{
        return null
    }
}


export default NotificationBanner
export default function swDev(){
    let url=`${process.env.PUBLIC_URL}/sw.js`

    if(navigator.serviceWorker){
        navigator.serviceWorker.register(url).then((response)=>{
            console.log("response",response)
        })
    }
}
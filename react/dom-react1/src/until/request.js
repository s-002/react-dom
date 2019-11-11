import Mock from '../mock/mock'
function Request(url,obj){
    return new Promise(res=>{
        res(Mock[url](obj))
    })
}
export default Request
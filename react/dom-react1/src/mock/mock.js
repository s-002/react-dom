import Mock,{Random} from 'mockjs'
import mockdata from '../mock/mock.json'
let data=Mock.mock({
    "data|10":[{
        "id|+1":0,
        name:'@cname',
        title:'@title(8)',
        img:Random.image('200x100'),
        "num|1000-9999":1000,
    }]
})
let mock={
    '/get/data'(){
        return mockdata
    },
    '/get/num'(obj){
        mockdata[obj].num++
        return mockdata[obj]
    }
}

export default mock
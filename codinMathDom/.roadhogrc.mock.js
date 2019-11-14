import GovList from './mock/gov'

export default {
    ///mock机构列表
    'GET /api/main/govList':(req,res)=>{

        res.send(GovList)
    }
};

const data=require('./src/mock/data.json')

module.exports={
    devServer:{
        before:function(app){
            app.get('/api/data',(req,res)=>{
                res.send(data)
            }),
            app.get('/api/login',(req,res)=>{
                res.send([
                    {user:123,pwd:'123'}
                ])
            })
        }
    }
}
const redis = require('redis');


const connectRedis= async() =>{
    try {
        const redisClient = await redis.createClient();
        return redisClient;
    } catch (error) {
        new Error(error);
    }
};

const setRedisData = async(strKey,value) =>{
    try {
        const redisConnection = await redis.createClient();
        redisConnection.on('error',(err)=>{
            console.log(error);
        });
        return redisConnection.set(strKey,value)
    } catch (error) {
        new Error(error)
    }finally{
       await redisConnection.quit();
    }
};

const getRedisData =async(strKey) =>{
    
        const redisConnection = await connectRedis();
        return new Promise ((resolve,reject) =>{
            try {
                redisConnection.get(strKey,(err,data)=>{
                    if(data){
                        resolve(data)
                    }
                    resolve(null)
                })
            } catch (error) {
                reject(error)
            }finally{
              redisConnection.quit();
            }
        })
    
};


const checkKeys =async(strKey) =>{
    const redisConnection = await connectRedis();
    return new Promise((resolve,reject)=>{
        try {
            redisConnection.keys(strKey,'*',(err,data)=>{
                if(data){
                    resolve(data)
                }
                resolve(null)
            })
        } catch (error) {
            reject(error)
        }finally{
             redisConnection.quit();
        }
    })
}

module.exports={
    checkKeys,
    getRedisData,
    setRedisData,
    connectRedis
}


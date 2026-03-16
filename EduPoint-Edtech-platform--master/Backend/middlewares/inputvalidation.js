const zod = require('zod');

const userschema = zod.object({
    email:zod.string(),
    password:zod.string().min(6)
})

function inputvalidate(req,res,next){
    const body = req.body;
    const result  = userschema.safeParse(body);
    if(result.success){
      return next() 
    }
    res.status(404).json({
        msg:"incorrect format of input provided"
    })
}

module.exports = inputvalidate;
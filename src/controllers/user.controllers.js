const catchError = require('../utils/catchError');
const  User = require('../models/User');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const user = await User.findAll()
    return res.json(user)
});
const  create = catchError(async (req,res)=>{
    const { first_name , lastname , email , password , birthday } =  req.body;
    const  newBody= {  first_name , lastname , email , password , birthday }
    const user = await User.create(newBody)
    return res.sendStatus(201).json(user)

    
})
const getOne= catchError(async(req,res)=>{
    const { id }= req.params
    const user = await User.findByPk(id)
    if(!user) return  res.status(404).json({message : "No se encontro el usuario"})
    return res.json(user);
})
const  destroy=catchError(async(req,res)=>{
    const{id}=req.params
    const user =await User.destroy ({where: {id}} )
    if (!user) return res.status(404).json({ message: 'El usuario no existe' })
    return res.status(204).json({ message:'Usuario eliminado correctamente' });
})
const update=catchError(async(req,res)=>{
    const { id }=req.params
    const  {first_name ,lastname ,password} = req.body
    const newBody= {first_name ,lastname ,password}
    const user = await User.findByPk(id)
    if (!user) return res.status(404).json({ message: 'El usuario no existe' })
    const userUpdate= await User.update(newBody,{where:{id},returning: true}
    )
    return res.status(201).json(userUpdate[1][0])
})
    

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}
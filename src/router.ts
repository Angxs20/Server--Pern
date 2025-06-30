import  Router  from "express";
import { createProduct, deleteProductById, getAllProducts, getProductByID, updateProductByID } from './handlers/Producto';
import { handleInputErrors } from "./middleware";
import { body } from "express-validator";
const router = Router();


router.get('/', getAllProducts,(req, res)=>{
    res.send("Llamando a Routimus Prime")
})
//create

router.get('/:id', getProductByID, (req, res)=>{
    res.send("Hola desde get by id")
})


router.post('/', handleInputErrors,createProduct)

router.put('/:id',handleInputErrors, updateProductByID,(req,res)=>{
    res.send("Hola desde put")
})
router.delete('/:id',deleteProductById,(req,res)=>{
    res.send("Hola desde delete")
})
export default router

import {Request, Response} from 'express'
import { getUserServices, updateService } from "../models/services.models"


const getUserData = async(req: Request, res: Response)=> {
    
    if (req.query.email){
        const email = req.query.email as string
        await getUserServices(email)
    .then(data => res.json(data))
    .catch(error => {
        if (error.status){
            res.status(error.status).json({message: error.message})
        }
    })
}else{
    
    res.status(500).json({message: "server error"})
}

}

const patchService = async (req: Request, res: Response) => {
    if(req.params){
        const id = req.params.id as string

        await updateService(id, req.body)
        .then(data => res.json(data))
        .catch(error => {
            if (error.status){
                res.status(error.status).json({message: error.message})
            }
        })
    }else{
        res.status(500).json({message: "server error"})
    }
}

export {
    getUserData,
    patchService
}

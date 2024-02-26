import { Request, Response } from "express"

export const GetHealthy=(req:Request,res:Response)=>{
    res.status(200).json(
    
    {
    
    sucess:true,
    message:"Server is healthy"
    
    }
    );
    }

export const GetRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            status: true,
            message: "roles runs succesfully"
        }
    )
}

export const DeleteRoles = (req: Request, res: Response) => {
    //Recuperamos parametro de la ruta
   const id= req.params.id;
    console.log(req.params.id)
    res.status(200).json(

        {

            sucess: true,
            message: "Server is delete",
            status:`${id} is deleted`

        }
    );
}

export const UpdateRoles = (req: Request, res: Response) => {

    //Recuperamos parametro de la ruta
    req.params.id;
    console.log(req.params.id)
    res.status(200).json(

        {

            sucess: true,
            message: "Server is update",
            id:req.params.id

        }
    );
}
export const PostRoles = (req: Request, res: Response) => {

    //req.body
    const name=req.body.hulk
    const {edad}=req.body.hulk[1]
    console.log(name);
    res.status(200).json(

        {

            //  sucess: true,
            //  message: "Server is post",
            //  edad:edad
            name
         }

        
    );
}
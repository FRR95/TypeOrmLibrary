import express from "express";
import 'dotenv/config' 
import { GetRoles,PostRoles,UpdateRoles,DeleteRoles,GetHealthy } from "./controllers/roleController";




export const app =express();

app.use(express.json());



// roles routes
app.get('/healthy',GetHealthy)
app.get('/roles',GetRoles)
app.post('/roles',PostRoles)
app.put('/roles/:id',UpdateRoles)
app.delete('/roles/:id',DeleteRoles)
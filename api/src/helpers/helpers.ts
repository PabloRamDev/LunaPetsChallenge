import { service } from "../types/serivces.types"
import fs from 'fs'
import path from 'path'


function serviceByEmail(data: service[], email: string):Promise<service[]>{

    return new Promise((resolve, reject) => {
        const response = data.filter(record => record.user_email == email)
       
        if(!response || response.length == 0){
            reject({
                message: 'not found',
                status: 404
            })
        }
        else{
            resolve(response)
        }
    })

}

function serviceExists(data: service[], id: string):Promise<service>{

    return new Promise((resolve, reject) => {
        const response = data.find(record => record.id == id)
       
        if(!response){
            reject({
                message: 'not found',
                status: 404
            })
        }
        else{
            resolve(response)
        }
    })

}

function readJSON(filename: string): service[] {
    const filePath = path.join(__dirname, '..', 'data', filename);
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as service[];
  }

async function writeJSON(filename:string, content:service[]) {
    
    try {
        await fs.promises.writeFile(filename, JSON.stringify(content), 'utf-8')
        console.log('file written successfully')
    }catch(error) {
        console.error(error)
    }
   
    
}


export {
    serviceByEmail,
    serviceExists,
    readJSON,
    writeJSON
}
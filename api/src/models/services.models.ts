
import path from 'path'
import {serviceExists, serviceByEmail, readJSON,writeJSON} from "../helpers/helpers"
import { service } from "../types/serivces.types"


function getUserServices(email:string):Promise<service[]>{

        const services = readJSON('services.json')
        console.log(services)
        return new Promise((resolve,reject) => {
            
            serviceByEmail(services, email)
            .then(data => resolve(data))
            .catch(error => reject(error))

        }
        )
}

function getService(id: string):Promise<service>{

    const services = readJSON('services.json')

    return new Promise((resolve, reject) => {
        serviceExists(services, id)
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

function updateService(id:string, newData: service) {

    const filePath = path.join(process.cwd(), 'services.json')
    const services = readJSON('services.json')

    return new Promise((resolve, reject) => {
        serviceExists(services, id)
        .then(data => {

            
            const index = services.findIndex(service => service.id == data.id)

            const newFile = [...services]

            newFile[index] = {
                ...newData
            }

            console.log(newFile)
            writeJSON(filePath, newFile).then(
                () => resolve([newFile[index]])
            )

        })
        .catch(err => reject(err))
    })
}

export {
    getUserServices,
    getService,
    updateService
}
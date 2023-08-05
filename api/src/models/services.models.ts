
import path from 'path'
import { serviceExists, serviceByEmail, readJSON, writeJSON } from "../helpers/helpers"
import { service } from "../types/serivces.types"

//model methos to list, retrieve and update pet services.

function getUserServices(email:string):Promise<service[]>{

        const services = readJSON('services.json')

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
            
            const oldData = {...services[index]}
            const newFile = [...services]

            newFile[index] = {...oldData,
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
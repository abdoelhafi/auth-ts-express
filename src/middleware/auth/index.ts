import { CustomValidator } from "express-validator";
import { getConnection } from "typeorm";
import { User } from "../../models/User";
export async function isUserAllreadyExist(email: string): Promise<CustomValidator> {
    const repo = getConnection().getRepository(User);
    console.log('start ');
    const user = await repo.findOne('614852fff49eff40b4eed3dc');
    console.log(email,'email')
    console.log(user,'user');
    if(user) return Promise.reject('E-mail already in use');
    // return repo.findOne({email}).then(
    //     user => {
    //         console.log('besmi allah ')

    //         if(user){
    //             console.log('is allready there')
    //             return Promise.reject('E-mail already in use');
    //         }
    //         console.log('is nottt allready there')

    //     }
    // )

}
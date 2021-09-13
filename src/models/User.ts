import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";
@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({
        length: 100
    })
    fname: string;

    @Column({
        length: 100
    })
    lname: string;

    @Column()
    email: string;
    
    @Column()
    password: string;
        
    @Column()
    isActive: boolean;

}
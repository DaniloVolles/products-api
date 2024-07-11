import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('PRODUCTS')
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    name: string

    @Column()
    price: number

    @Column()
    description: string

}

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({name: 'created_at', type: 'timestamp'})
    createdAt: string;
    
    @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
    updatedAt: string;
}
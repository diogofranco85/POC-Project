import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Clients extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    document: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

}

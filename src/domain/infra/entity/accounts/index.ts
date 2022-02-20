import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Double } from "typeorm";

@Entity()
export class Accounts extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_id: string;

    @Column()
    moviment: string;

    @Column()
    value: Number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

}

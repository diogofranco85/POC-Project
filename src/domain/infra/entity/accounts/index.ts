import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, OneToOne } from "typeorm";
import { Clients } from '../clients';

@Entity('accounts')
export class Accounts extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Clients)
    @JoinColumn()
    client_id: Clients;

    @Column({ type: 'char', length: 1 })
    moviment: string;

    @Column({ type: 'double' })
    value: Number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

}

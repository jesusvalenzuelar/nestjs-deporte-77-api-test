import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100 })
  firstName: string;

  @Column({ nullable: false, length: 150 })
  lastName: string;

  @Column({ unique: true, nullable: false, length: 200 })
  email: string;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  lastUpdateDate: Date;

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

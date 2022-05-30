import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

import { ICreateUserDTO } from "../dtos/icreate-user-dto";

@Entity("users")
class User {
  constructor(userData: ICreateUserDTO) {
    if (userData) {
      this.id = userData.id;
      this.full_name = userData.full_name;
      this.email = userData.email;
      this.password = userData.password;
      this.cpf = userData.cpf;
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cpf?: string;

  @CreateDateColumn()
  created_at: Date;
}

export { User };

import { IsNotEmpty, IsString, Matches } from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class AuthInput {
  @IsString()
  @IsNotEmpty()
  username: string;

  @Matches(passwordRegEx, {
    message: `La contraseña debe contener entre 8 y 20 caracteres,
  al menos una mayuscula,
  una minuscula,
  un numero y 
  un caracter especial.`,
  })
  @IsNotEmpty()
  password: string;
}

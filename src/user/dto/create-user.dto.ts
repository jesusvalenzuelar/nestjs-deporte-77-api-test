import {
  IsAlphanumeric,
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  Matches,
} from 'class-validator';
const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5, {
    message: 'Su nombre debe contener al menos 5 caracteres',
  })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5, {
    message: 'Su apellido debe contener al menos 5 caracteres',
  })
  lastName: string;

  @IsNotEmpty()
  @IsEmail(null, {
    message: 'Ingrese un correo electronico valido',
  })
  email: string;

  @IsAlphanumeric(null, {
    message: 'El nombre de usuario solo debe contener caracteres alfanumericos',
  })
  @IsNotEmpty()
  @MinLength(6, {
    message: 'El nombre de usuario debe contener al menos 6 caracteres',
  })
  username: string;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `La contraseña debe contener entre 8 y 20 caracteres,
    al menos una mayuscula,
    una minuscula,
    un numero y 
    un caracter especial.`,
  })
  password: string;
}

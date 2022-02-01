import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  list() {
    return 'Listando todos os usuários';
  }

  save(data: any) {
    if (!data.name) {
      throw new BadRequestException('Informe o nome do usuário');
    }

    return 'Dados salvos com sucesso!';
  }

  get(id: number) {
    return `Obtive o usuário ${id}`;
  }
}

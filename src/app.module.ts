import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UsersStore } from './store/users.store';

@Module({
  controllers: [UsersController, AlbumsController],
  providers: [
    { provide: 'DATABASE_NAME', useValue: 'MOON_KNIGHT' },
    { provide: 'MAIL', useValue: ['admin@domain.com', 'no-reply@domain.com'] },
    { provide: 'ENV_CONFIG', useValue: { type: 'Dev', node: '17' } }
  ]
  // Standard dependency injection 
  // providers: [{ provide: UsersStore, useClass: UsersStore }]
  // providers: [userStore]// use this when Injection token and classname are same
})
export class AppModule { }

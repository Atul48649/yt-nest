import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UsersStore } from './store/users.store';

@Module({
  controllers: [UsersController, AlbumsController],
  providers: [{ provide: UsersStore, useClass: UsersStore }]

  // providers: [userStore]// use this when Injection token and classname are same
})
export class AppModule { }

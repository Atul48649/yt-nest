// import { Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Post, Redirect, Req, Res } from "@nestjs/common";
import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/index";
import { UsersStore } from "./store/users.store";

let USERS = [];

@Controller('/users')
export class UsersController {

    // Inject object provider
    constructor(@Inject('ENV_CONFIG') private config: Record<string, any>) {
        console.log(config);
    }

    // Inject array of string provider
    // constructor(@Inject('MAIL') private emails: string[]) {
    //     console.log('emails: ', emails);
    // }

    // Inject string provider
    // constructor(@Inject('DATABASE_NAME') private dbname: string) {
    //     console.log(this.dbname);
    // }

    // standard dependency injection
    // constructor(private store: UsersStore) {
    //     console.log(this.store);
    // }

    // CRUD Operations
    // @Post()
    // addUser(@Body() createUserDto: CreateUserDTO) {
    //     USERS.push(createUserDto)
    //     return "User added";
    // }

    // @Get()
    // getUsers() {
    //     return USERS;
    // }

    // @Get("/:id")
    // getUser(@Param('id') id: number) {
    //     const user = USERS.filter((user) => user.id === +id)
    //     console.log(user);
    //     return user.length > 0 ? user : 'No user associated with this id'
    // }

    // @Put('/:id')
    // updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDTO) {
    //     const userIndex = USERS.findIndex((user) => +user.id === +id);
    //     console.log(userIndex);
    //     if (!userIndex) {
    //         return;
    //     }
    //     USERS[userIndex] = updateUserDto;
    //     return;
    // }

    // @Delete('/:id')
    // deleteUser(@Param('id') id: number) {
    //     USERS = USERS.filter(user => user.id !== +id)
    //     return;
    // }
}
// import { Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Post, Redirect, Req, Res } from "@nestjs/common";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/index";

let USERS = [];

@Controller('/users')
export class UsersController {
    @Post()
    addUser(@Body() createUserDto: CreateUserDTO) {
        USERS.push(createUserDto)
        return "User added";
    }

    @Get()
    getUsers() {
        return USERS;
    }

    @Get("/:id")
    getUser(@Param('id') id: number) {
        const user = USERS.filter((user) => user.id === +id)
        console.log(user);
        return user.length > 0 ? user : 'No user associated with this id'
    }

    @Put('/:id')
    updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDTO) {
        const userIndex = USERS.findIndex((user) => +user.id === +id);
        console.log(userIndex);
        if (!userIndex) {
            return;
        }
        USERS[userIndex] = updateUserDto;
        return;
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: number) {
        USERS = USERS.filter(user => user.id !== +id)
        return;
    }
}
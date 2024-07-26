import { Controller, Get, Header, HttpCode, HttpStatus, Post, Redirect, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { url } from "inspector";

@Controller('/users')
export class UsersController {
    @Get('/profile')
    getprofile(@Req() req: Request) {
        console.log(req.params);
        return {
            message: 'Hello, Atul'
        }
    }

    @Post('/profile')
    @Redirect('/users/account', 302)
    // @Header('cache-control', 'none')
    // @Header('X-name', 'Atul')
    // @HttpCode(HttpStatus.NO_CONTENT) //this is used for setting status code explicitly
    postProfile(@Req() req: Request) {
        return {
            message: 'Post'
        }
    }
    // setting up response
    // postProfile(@Req() req: Request, @Res() res: Response) {
    //     res.status(201).json({
    //         message: 'Post'
    //     })
    // }

    @Get('/account')
    redirectRoute() {
        return 'Working account'
    }

    @Get('/redirect')
    @Redirect('/users/account', 302)
    getRedirect(@Req() req: Request) {
        const random = (Math.random() * 10 + 1)
        console.log(random);
        if (random < 5) {
            return {
                url: '/users/account',
                statusCode: 302
            }
        } else {
            return {
                url: '/users/wallet',
                statusCode: 302
            }
        }
    }

    @Get('/wallet')
    redirectWallet() {
        return 'Working wallet'
    }
}
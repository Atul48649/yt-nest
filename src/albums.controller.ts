import { Controller, Get } from "@nestjs/common";

@Controller('/album')
export class AlbumsController {
    @Get()
    getProfile() {
        return 'Photo';
    }
}
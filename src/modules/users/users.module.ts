import { UsersController } from "@/modules/users/users.controller";
import { User } from "@/modules/users/users.entity";
import { UsersService } from "@/modules/users/users.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [TypeOrmModule],
})
export class UsersModule {}

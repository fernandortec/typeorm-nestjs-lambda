import serverlessExpress from "@codegenie/serverless-express";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import type { Callback, Context, Handler } from "aws-lambda";
import { AppModule } from "./app.module";

let server: Handler;

async function bootstrap(): Promise<Handler> {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	await app.init();

	const expressApp = app.getHttpAdapter().getInstance();
	return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
	event: never,
	context: Context,
	callback: Callback,
) => {
	server = server ?? (await bootstrap());
	return server(event, context, callback);
};

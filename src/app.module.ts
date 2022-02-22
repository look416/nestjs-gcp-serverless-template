import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [LoggerModule.forRoot(), AuthModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

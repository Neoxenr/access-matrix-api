import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsModule } from './subjects/subjects.module';
import { PermissionsModule } from './permissions/permissions.module';
import { LinksModule } from './links/links.module';
import { Subject } from './subjects/entities/subject.entity';
import { Permission } from './permissions/entities/permission.entity';
import { Link } from './links/entities/link.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://xhumdblu:4GhbvvEamzYkBygQKyX8057XLnag5PlC@snuffleupagus.db.elephantsql.com/xhumdblu',
      entities: [Subject, Permission, Link],
      synchronize: true,
      logging: true,
    }),
    SubjectsModule,
    PermissionsModule,
    LinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnPasswordForTbUser1687677564220 implements MigrationInterface {
    name = 'AddColumnPasswordForTbUser1687677564220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL DEFAULT '123'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}

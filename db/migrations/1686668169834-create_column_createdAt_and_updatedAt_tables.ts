import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateColumnCreatedAtAndUpdatedAtTables1686668169834 implements MigrationInterface {
    name = 'CreateColumnCreatedAtAndUpdatedAtTables1686668169834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feeds" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "feeds" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "activities" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "activities" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "activities" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "activities" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "feeds" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "feeds" DROP COLUMN "createdAt"`);
    }

}

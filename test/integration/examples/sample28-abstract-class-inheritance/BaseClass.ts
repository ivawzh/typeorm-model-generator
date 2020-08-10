import { Column, PrimaryColumn } from "typeorm";

export default abstract class BaseClass {

    @PrimaryColumn("int")
    id: number;

}

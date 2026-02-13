import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

interface InternAttributes {
  id?: number;
  name: string;
  nickname: string;
  email: string;
  dob: Date;
}
class Intern extends Model<InternAttributes> implements InternAttributes {
  public id!: number;
  public name!: string;
  public nickname!: string;
  public email!: string;
  public dob!: Date;
}
Intern.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "interns"
  }
);

export default Intern;
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlphanumeric:{
          args:true,
          msg:"El username"
        },
        len:{
          args:[4,20],
          msg:"El 4 qn 20"
        }
      }
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:{
          args:true
        }
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:{
          args:[8,20],
          msg:"El password ต้อวไม่น้อยกส่า 8 และไม่มากเกิน 20 ตัวอักษร"
        }
      }
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Article,{
      foreignKey:{
        name:authorId,
        field:'author_id',
      }
    })
    
  };
  return User;
};
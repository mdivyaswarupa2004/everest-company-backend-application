"use strict";

module.exports = {

  async up(queryInterface) {

    await queryInterface.bulkInsert("interns", [
      {
        name: "M Divyaswarupa",
        nickname: "Divu",
        email: "divyaswarupa2004@gmail.com",
        dob: "2004-12-29",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sreevani",
        nickname: "Vani",
        email: "sreevani@gmail.com",
        dob: "2003-06-12",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Shaik Suhail",
        nickname: "Suhail",
        email: "suhail@gmail.com",
        dob: "2004-12-25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Poojitha",
        nickname: "Pooji",
        email: "poojitha@gmail.com",
        dob: "2003-09-10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Harathi",
        nickname: "Haru",
        email: "harathi@gmail.com",
        dob: "2004-04-20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Anas",
        nickname: "Anas",
        email: "anas@gmail.com",
        dob: "2003-11-18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Uma Maheswari",
        nickname: "Uma",
        email: "uma@gmail.com",
        dob: "2004-07-25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rafi",
        nickname: "Rafi",
        email: "rafi@gmail.com",
        dob: "2003-03-30",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ruchitha",
        nickname: "Ruchi",
        email: "ruchitha@gmail.com",
        dob: "2004-02-14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chaithanya",
        nickname: "Chaithu",
        email: "chaithanya@gmail.com",
        dob: "2003-08-05",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sowmya",
        nickname: "Sowmi",
        email: "sowmya@gmail.com",
        dob: "2004-05-17",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kalyani",
        nickname: "Kalyan",
        email: "kalyani@gmail.com",
        dob: "2003-12-22",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chandhana",
        nickname: "Chandu",
        email: "chandhana@gmail.com",
        dob: "2004-09-09",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nivedhitha",
        nickname: "Nivi",
        email: "nivedhitha@gmail.com",
        dob: "2003-01-19",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("interns", null, {});
  }
};
module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      assignedTo: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.DATE
      },
      createdOn: {
        type: Sequelize.DATE
      },
      createdBy: {
        type: Sequelize.STRING
      },
      difficulty: {
        type: Sequelize.INTEGER
      },
      importance: {
        type: Sequelize.INTEGER
      },
      completedOn: {
        type: Sequelize.DATE
      },
      isComplete: {
        type: Sequelize.BOOLEAN
      },
      tags: {
        type: Sequelize.STRING
      }
    });
  
    return Task;
  };
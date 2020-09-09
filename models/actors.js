module.exports = function(sequelize, Datatypes) {
  const actors = sequelize.define("actors", {
    exercise: {
      type: Datatypes.DECIMAL(3, 1),
      allowNull: false
    },
    book_title: {
      type: Datatypes.STRING,
      allowNull: false
    },
    author_composer: {
      type: Datatypes.STRING,
      allowNull: false
    },
    primary_positions: {
      type: Datatypes.STRING,
      allowNull: false
    },
    secondary_positions: {
      type: Datatypes.STRING
    },
    primary_bowing: {
      type: Datatypes.STRING,
      allowNull: false
    },
    secondary_bowing: {
      type: Datatypes.STRING
    },
    musical_key: {
      type: Datatypes.STRING,
      allowNull: false
    },
    difficulty: {
      type: Datatypes.STRING
    },
    focus: {
      type: Datatypes.STRING,
      allowNull: false
    },
    type: {
      type: Datatypes.STRING,
      allowNull: false
    },
    image: {
      type: Datatypes.STRING
    },
    link: {
      type: Datatypes.STRING
    },
    book_description: {
      type: Datatypes.TEXT
    }
  });
  actors.associate = function(models) {
    actors.belongsToMany(models.movies, {
      through: "actormovies"
    });
  };
  actors.associate = function(models) {
    actors.hasMany(models.actorsmovies);
  };
  return actors;
};

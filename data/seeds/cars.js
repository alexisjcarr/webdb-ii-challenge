exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "123456789Zebra1",
          make: "Peugot",
          model: "iOn",
          MPG: 200,
          transmission_type: "manual",
          title_status: "clean"
        },
        {
          VIN: "123456789Zebra2",
          make: "Morgan",
          model: "Roadster",
          MPG: 30,
          transmission_type: "automatic",
          title_status: "salvage"
        },
        {
          VIN: "123456789Zebra3",
          make: "Elfin",
          model: "T5",
          MPG: 40000,
          transmission_type: "manual",
          title_status: "clean"
        },
        {
          VIN: "123456789Zebra4",
          make: "Vauxhall",
          model: "Insignia",
          MPG: 30,
          transmission_type: "automatic",
          title_status: "clean"
        },
        {
          VIN: "123456789Zebra5",
          make: "Hyundai",
          model: "Sonata",
          MPG: 100,
          transmission_type: "automatic",
          title_status: "clean"
        }
      ]);
    });
};

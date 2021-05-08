const fastify = require("fastify")({ logger: true });

const fruits = [
  {
    name: "mano",
    price: 10,
    img:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "apple",
    price: 100,
    img:
      "https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "grapes",
    price: 48,
    img:
      "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  },
  {
    name: "berries",
    price: 200,
    img:
      "https://images.unsplash.com/photo-1516659828014-fb21a5bd8ca3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVycmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
  },
];

//cors
fastify.register(require("fastify-cors"), {
  // put your options here
});

// Declare a route
fastify.get("/fruits", async (request, reply) => {
  let filteredFruits = fruits;
  if (request.query.search) {
    filteredFruits = fruits.filter((fruit) => {
      return fruit.name
        .toLowerCase()
        .startsWith(request.query.search.toLowerCase());
    });
  }

  return {
    fruits: filteredFruits,
  };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

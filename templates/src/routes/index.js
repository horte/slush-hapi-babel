import fs from 'fs';
import path from 'path';
import logger from '../utils/logger';
const basename = path.basename(__filename);

// requires and returns all modules that match
function requireAll(requireContext) {
  return requireContext
    .keys()
    .map(requireContext);
}

export const registerAll = (server) => {
  // Dynamically resolve all routes (ignore dotfiles)
  // See https://webpack.github.io/docs/context.html
  const routes = requireAll(require.context('./', true, /^\.\/.*\.js$/));
  routes.forEach(route => route.default(server));
};

export default server => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('Hello from <%= appName %>');
    },
    config: {
      tags: ['api'],
      validate: {
        params: {},
        query: {},
      },
      response: {
        // schema: <%= routeName %>Schema,
      },
    },
  });
}

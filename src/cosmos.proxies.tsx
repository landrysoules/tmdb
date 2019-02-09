import createRouterProxy from 'react-cosmos-router-proxy';

// We ensure a specific proxy order
export default [
  // Not all proxies have options, and often relying on defaults is good enough
  createRouterProxy(),
];

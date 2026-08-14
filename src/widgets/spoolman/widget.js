import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "{url}/api/v1/{endpoint}",
  proxyHandler: credentialedProxyHandler,

  mappings: {
    spools: {
      endpoint: "spool",
      params: ["location"],
    },
  },
};

export default widget;

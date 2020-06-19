import fetch from "isomorphic-unfetch";

export default context => {
  const handleError = err => {
    if (context.app && context.app.$logger) {
      context.app.$logger.error(err);
    } else {
      console.error(err);
    }
    if (!!err.statusCode) {
      context.error({ statusCode: err.statusCode });
    } else if (!!err.status) {
      context.error({ statusCode: err.status });
    } else {
      context.error();
    }
  };

  context.$pagePayload = async context => {
    if (context.payload) {
      return { data: context.payload };
    } else {
      const base = "<%= options.base %>";
      const normalizedPath = context.route.path.replace(/\/+$/, "");

      <% if (options.dev) { %>
        const url = `${process.env.APP_URL}${base}${normalizedPath}/index.json`;
      <% } else { %>
        const url = `${base}${normalizedPath}/index.json`;
      <% } %>

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw response; // non-200 code
        }
        const data = await response.json();
        return { data };
      } catch (err) {
        handleError(err);
      }
    }
  };
};

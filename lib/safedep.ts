import { createClient, Interceptor } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { InsightService } from "@buf/safedep_api.connectrpc_es/safedep/services/insights/v2/insights_connect.js";
import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";

function authenticationInterceptor(token: string, tenant: string): Interceptor {
  return (next) => async (req) => {
    req.header.set("authorization", token);
    req.header.set("x-tenant-id", tenant);
    return await next(req);
  };
}

export async function getPackageInsight({
  name,
  version,
}: {
  name: string;
  version: string;
}) {
  const token = process.env.SAFEDEP_API_KEY;
  if (!token) {
    throw new Error("SAFEDEP_API_KEY is required");
  }

  const tenantId = process.env.SAFEDEP_TENANT_ID;
  if (!tenantId) {
    throw new Error("SAFEDEP_TENANT_ID is required");
  }

  const transport = createConnectTransport({
    baseUrl: "https://api.safedep.io",
    httpVersion: "1.1",
    interceptors: [authenticationInterceptor(token, tenantId)],
  });

  const client = createClient(InsightService, transport);
  const res = await client.getPackageVersionInsight({
    packageVersion: {
      package: {
        ecosystem: Ecosystem.NPM,
        name: name,
      },
      version: version,
    },
  });

  return res;
}

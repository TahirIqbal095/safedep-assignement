"use server";

import { createClient, Interceptor } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { InsightService } from "@buf/safedep_api.connectrpc_es/safedep/services/insights/v2/insights_connect.js";
import { MalwareAnalysisService } from "@buf/safedep_api.connectrpc_es/safedep/services/malysis/v1/malysis_connect.js";
import { ecosystemMap } from "@/utils/ecosystem-map";
import { PackageParams } from "@/types";

const API_BASE_URL = "https://api.safedep.io";

function getAuthHeaders() {
  const token = process.env.SAFEDEP_API_KEY;
  const tenantId = process.env.SAFEDEP_TENANT_ID;

  if (!token) throw new Error("SAFEDEP_API_KEY is required");
  if (!tenantId) throw new Error("SAFEDEP_TENANT_ID is required");

  return { token, tenantId };
}

function authenticationInterceptor(token: string, tenant: string): Interceptor {
  return (next) => async (req) => {
    req.header.set("authorization", token);
    req.header.set("x-tenant-id", tenant);
    return await next(req);
  };
}

function getTransport() {
  const { token, tenantId } = getAuthHeaders();
  return createConnectTransport({
    baseUrl: API_BASE_URL,
    httpVersion: "1.1",
    interceptors: [authenticationInterceptor(token, tenantId)],
  });
}

function resolveEcosystem(ecosystem: string) {
  const resolved = ecosystemMap[ecosystem.toLowerCase()];
  if (resolved === undefined) {
    throw new Error(`Unsupported ecosystem: ${ecosystem}`);
  }
  return resolved;
}

export async function getPackageInsight({
  name,
  version,
  ecosystem,
}: PackageParams) {
  const client = createClient(InsightService, getTransport());
  const res = await client.getPackageVersionInsight({
    packageVersion: {
      package: {
        ecosystem: resolveEcosystem(ecosystem),
        name,
      },
      version,
    },
  });

  return res.toJson();
}

export async function getMalwareAnalysis({
  name,
  version,
  ecosystem,
}: PackageParams) {
  const client = createClient(MalwareAnalysisService, getTransport());
  const res = await client.queryPackageAnalysis({
    target: {
      packageVersion: {
        package: {
          ecosystem: resolveEcosystem(ecosystem),
          name,
        },
        version,
      },
    },
  });

  return res.toJson();
}

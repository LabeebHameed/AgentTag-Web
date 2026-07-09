import { SeedApi, type ApprovalApi } from "./api";

/**
 * This is the MARKETING site — the embedded product showcase on the landing
 * page (see App.tsx's `StoreProvider` usages) must never call the real
 * backend or need real operator credentials. Unlike the console (a separate
 * repo/deployment), this app has no `HttpApi` implementation, no Clerk
 * dependency, and no way to be pointed at a live API — the showcase always
 * renders fixed seed data, on purpose.
 */
export const clerkPublishableKey: string | undefined = undefined;

/** The single ApprovalApi instance the embedded showcase talks through — always fake data. */
export const api: ApprovalApi = new SeedApi();

/** No-op here — kept so shared dashboard components compile unchanged. */
export const setApiClerkToken = (_getClerkToken: () => Promise<string | null>): void => {
  /* no Clerk on the marketing site */
};

/** No-op here — kept so shared dashboard components compile unchanged. */
export const setApiAgentDid = (_did: string): void => {
  /* SeedApi ignores the active agent DID */
};

export const isHttpApi = (): boolean => false;

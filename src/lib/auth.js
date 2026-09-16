const authStorageKey = "learnreact-auth";
const runStorageKey = "learnreact-run";

export function initializeAuthSession() {
  const currentRun = String(import.meta.env.VITE_RUN_ID || "development");

  if (sessionStorage.getItem(runStorageKey) !== currentRun) {
    sessionStorage.removeItem(authStorageKey);
    sessionStorage.setItem(runStorageKey, currentRun);
  }
}

export function isAuthenticated() {
  initializeAuthSession();
  return sessionStorage.getItem(authStorageKey) === "true";
}

export function signIn() {
  sessionStorage.setItem(authStorageKey, "true");
}

export function signOut() {
  sessionStorage.removeItem(authStorageKey);
}

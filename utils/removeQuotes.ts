export function removeQuotes(string: string) {
  // to remove ""
  const cookieCountryId = string?.slice(1, string.length - 1);
  return cookieCountryId;
}
